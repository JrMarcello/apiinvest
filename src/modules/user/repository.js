import bcrypt from 'bcrypt'
import constants from '../../common/constants'
import { getToken } from '../../core/middlewares/auth'
import * as investor from '../investor/repository'
import * as builder from '../builder/repository'
import * as dao from './dao'

/**
 *  Get all Users
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find a User by ID
 *
 * @param {Interger} id - User ID
 * @returns {Promisse} - Returns a Promisse
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
 * @param {Object} data - User data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = data => {
  return dao.create(data)
}

/**
 * Updates an User
 *
 * @param {Object} data - User data to be updated
 * @returns {Promisse} - Returns a Promisse
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
 * @param {Object} id - User data to be removed
 * @returns {Function} - Returns a Promisse
 */
export const remove = id => {
  return dao.remove(id)
}

/**
 * Login an User, given an email and password
 *
 * @param {Object} params - User data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const login = async params => {
  const user = await dao.getByEmail(params.email)

  if (!user || !bcrypt.compareSync(params.password, user.password))
    throw Error(constants.user.error.INVALID_USER_LOGIN.message)

  user.profile = await dao.getProfile(user.id_profile)

  if (user.id_profile === 1) {
    user.investor = await investor.getByUserId(user.id)
  }

  if (user.id_profile === 2) {
    user.builder = await builder.getByUserId(user.id)
  }

  if (user && user.id_profile === 3) {
    user.investor = await investor.getByUserId(user.id)
    user.builder = await builder.getByUserId(user.id)
  }

  return getToken(user)
}
