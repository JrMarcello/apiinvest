import bcrypt from 'bcrypt'
import crypto from 'crypto'
import moment from 'moment'
import constants from '../../common/constants'
import { env } from '../../common/utils'
import { getToken } from '../../core/middlewares/auth'
import * as mailer from '../../core/mailer'
import * as investor from '../investor/repository'
import * as builder from '../builder/repository'
import * as dao from './dao'

/**
 *  Get all Users
 *
 * @param {object} params - Params for query
 * @returns - Returns a object
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find a User by ID
 *
 * @param {string} id - User ID
 * @returns - Returns a object
 */
export const getById = async id => {
  const user = await dao.getById(id)

  if (user && user.id_profile === 1) {
    user.investor = await investor.getByUserId(user.id)
  }

  if (user && user.id_profile === 2) {
    user.builder = await builder.getByUserId(user.id)
  }

  if (user && user.id_profile === 3) {
    user.investor = await investor.getByUserId(user.id)
    user.builder = await builder.getByUserId(user.id)
  }

  return user
}

/**
 * Saves a User
 *
 * @param {object} data - User data
 * @returns - Returns a object
 */
export const create = async data => {
  if (await dao.getByEmail(data.email)) throw constants.user.error.MAIL_EXISTS

  return dao.create(data)
}

/**
 * Updates an User
 *
 * @param {object} data - User data
 * @returns - Returns a object
 */
export const update = data => {
  return dao.update({
    id: data.id,
    username: data.username,
    password: data.password
  })
}

/**
 * Remove an User
 *
 * @param {string} id - User ID
 * @returns - Returns a object
 */
export const remove = id => {
  return dao.remove(id)
}

/**
 * Login an User, given an email and password
 *
 * @param {object} params - Login data
 * @returns - Returns a object
 */
export const login = async params => {
  let user

  if (params.id) {
    user = await loginFacebook(params)
  } else if (params.profileObj) {
    user = await loginGoogle(params)
  } else {
    user = await dao.getByEmail(params.email)

    if (!user || !bcrypt.compareSync(params.password, user.password)) throw constants.user.error.INVALID_USER_LOGIN
  }

  user = await getById(user.id)
  user.profile = await dao.getProfile(user.id_profile)

  return getToken(user)
}

/**
 * Login an User by Facebbok credentials
 *
 * @param {object} params Facebook user profile data
 * @returns - Returns a object
 */
const loginFacebook = async params => {
  let user = await dao.getByFacebookId(params.id)

  if (!user)
    user = await dao.create({
      id_facebook: params.id,
      email: params.email,
      username: params.name,
      avatar_url: params.picture.data.url
    })

  return user
}

/**
 * Login an User by Google credentials
 *
 * @param {object} params Facebook user profile data
 * @returns - Returns a object
 */
const loginGoogle = async params => {
  let user = await dao.getByGoogleId(params.profileObj.googleId)

  if (!user)
    user = await dao.create({
      id_google: params.profileObj.googleId,
      email: params.profileObj.email,
      username: params.profileObj.name,
      avatar_url: params.profileObj.imageUrl
    })

  return user
}

/**
 * Send a email to the User for reset password
 *
 * @param {String} email - User email
 * @returns - Returns a object
 */
export const forgotPassword = async email => {
  const user = await dao.getByEmail(email)

  if (!user) throw constants.user.error.FORGOT_PASSWORD_MAIL

  const token = crypto.randomBytes(20).toString('hex')

  await dao.update({
    id: user.id,
    reset_token: token,
    reset_expires: moment().add(1, 'h')
  })

  return mailer.sendEmail({
    from: `Buildinvest <${env().buildinvest.emails.contact}>`,
    to: user.email,
    subject: 'Buildinvest - Nova senha',
    template: 'forgotPassword',
    context: { user, url: `http://${env().CLIENT_BASE_PATH}/resetpassword?t=${token}` }
  })
}

/**
 * Reset User password
 *
 * @param {Object} params - User email
 * @returns - Returns a object
 */
export const resetPassword = async params => {
  const user = await dao.getByToken(params.token)

  if (!user) throw constants.user.error.RESET_PASSWORD_TOKEN

  if (moment().isAfter(user.reset_expires)) throw constants.user.error.RESET_PASSWORD_EXPIRES

  await dao.update({
    id: user.id,
    password: params.password,
    reset_token: null,
    reset_expires: null
  })

  return mailer.sendEmail({
    from: `Buildinvest <${env().buildinvest.emails.contact}>`,
    to: user.email,
    subject: 'Buildinvest - Nova senha',
    template: 'resetPassword',
    context: { user }
  })
}
