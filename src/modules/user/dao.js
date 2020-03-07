import bcrypt from 'bcrypt'
import db from '../../core/database'
import { generateUUID } from '../../common/utils'

const table = '"user"'

/**
 *  Find all Users
 *
 * @param {object} params - Params for query
 * @returns - Returns a object
 */
export const getAll = () => {
  return db
    .select()
    .from(table)
    .where('active', true)
    .run()
}

/**
 * Find a User by ID
 *
 * @param {string} id - User ID
 * @returns - Returns a object
 */
export const getById = async id => {
  return (
    await db
      .select()
      .from(table)
      .where('id', id)
      .and('active', true)
      .run()
  )[0]
}

/**
 * Find a User by email
 *
 * @param {string} email - User email
 * @returns - Returns a object
 */
export const getByEmail = async email => {
  return (
    await db
      .select()
      .from(table)
      .where('email', email)
      .and('active', true)
      .run()
  )[0]
}

/**
 * Find a User by Reset token
 *
 * @param {string} token - User reset token
 * @returns - Returns a object
 */
export const getByToken = async token => {
  return (
    await db
      .select()
      .from(table)
      .where('reset_token', token)
      .and('active', true)
      .run()
  )[0]
}

/**
 * Find a User by Facebook ID
 *
 * @param {string} facebookId - User Facebook ID
 * @returns - Returns a object
 */
export const getByFacebookId = async facebookId => {
  return (
    await db
      .select()
      .from(table)
      .where('id_facebook', facebookId)
      .and('active', true)
      .run()
  )[0]
}

/**
 * Find a User by Facebook ID
 *
 * @param {string} googleId - User Facebook ID
 * @returns - Returns a object
 */
export const getByGoogleId = async googleId => {
  return (
    await db
      .select()
      .from(table)
      .where('id_google', googleId)
      .and('active', true)
      .run()
  )[0]
}

/**
 * Find User Profile by ID
 *
 * @param {number} id - Profile ID
 * @returns - Returns a object
 */
export const getProfile = async id => {
  return (
    await db
      .select()
      .from('profile')
      .where('id', id)
      .and('active', true)
      .run()
  )[0]
}

/**
 * Create an User
 *
 * @param {object} data - User data
 * @returns - Returns a object
 */
export const create = async data => {
  data.id = await generateUUID()
  if (data.password) data.password = `'${bcrypt.hashSync(data.password, 10)}'`

  return db
    .insert(data)
    .into(table)
    .returning('*')
    .run()
}

/**
 * Update an User
 *
 * @param {object} data - User data
 * @returns - Returns a object
 */
export const update = data => {
  if (data.password) data.password = `'${bcrypt.hashSync(data.password, 10)}'`

  return db
    .update(table)
    .set(data)
    .where('id', data.id)
    .run()
}

/**
 * Remove an User
 *
 * @param {string} id - User ID
 * @returns - Returns data
 */
export const remove = id => {
  return db
    .update(table)
    .set('active', false)
    .where('id', id)
    .run()
}
