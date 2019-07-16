// import * as db from '../../core/database'
import db from '../../core/database'

/**
 *  Get all User from database.
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async params => {
  // const query = `SELECT NOW()`

  // const res = await (await db.connect()).query(query)

  // return res.rows[0]

  // return (await db.connect()).select('now()')

  return (await db.select('now() as data').run())[0]
}

/**
 * Find a User by ID
 *
 * @param {Interger} id - User ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = async id => {
  const query = `SELECT NOW()`

  const res = await (await db.connect()).query(query)

  return res.rows[0]
}

/**
 * Saves a User in database
 *
 * @param {Object} data - User data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  const query = `SELECT NOW()`

  const res = await (await db.connect()).query(query)

  return res.rows[0]
}

/**
 * Updates an User, given an id
 *
 * @param {Object} data - User data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = async data => {
  const query = `SELECT NOW()`

  const res = await (await db.connect()).query(query)

  return res.rows[0]
}

/**
 * Remove a User
 *
 * @param {Object} id - User data to be removed
 * @returns {Object} - Returns data
 */
export const remove = async id => {
  const query = `SELECT NOW()`

  const res = await (await db.connect()).query(query)

  return res.rows[0]
}
