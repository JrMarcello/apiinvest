import db from '@core/database'
import { generateUUID } from '@common/utils'
import bcrypt from 'bcrypt'

const table = '"user"'

/**
 *  Find all Users
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
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
 * @param {Interger} id - User ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = async id => {
  return (await db
    .select()
    .from(table)
    .where('id', id)
    .and('active', true)
    .run())[0]
}

/**
 * Find a User by email
 *
 * @param {Interger} email - User email
 * @returns {Promisse} - Returns a Promisse
 */
export const getByEmail = async email => {
  return (await db
    .select()
    .from(table)
    .where('email', email)
    .and('active', true)
    .run())[0]
}

/**
 * Find User Profile by ID
 *
 * @param {Interger} id - Profile ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getProfile = async id => {
  return (await db
    .select()
    .from('profile')
    .where('id', id)
    .and('active', true)
    .run())[0]
}

/**
 * Create an User
 *
 * @param {Object} data - User data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  data.id = await generateUUID()
  data.password = `'${bcrypt.hashSync(data.password, 10)}'`

  return db
    .insert(data)
    .into(table)
    .returning('*')
    .run()
}

/**
 * Update an User
 *
 * @param {Object} data - User data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  if (data.password) data.password = bcrypt.hashSync(data.password, 10)

  return db
    .update(table)
    .set(data)
    .where('id', data.id)
    .run()
}

/**
 * Remove an User
 *
 * @param {Object} id - User id to be removed
 * @returns {Object} - Returns data
 */
export const remove = id => {
  return db
    .update(table)
    .set('active', false)
    .where('id', id)
    .run()
}
