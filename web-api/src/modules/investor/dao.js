import * as db from '../../core/database'

/**
 *  Get all Member from database.
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async params => {
  const query = `SELECT NOW()`

  const res = await (await db.connect()).query(query)

  return res.rows[0]
}

/**
 * Find a Member by ID
 *
 * @param {Interger} id - Member ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = async id => {
  const query = `SELECT NOW()`

  const res = await (await db.connect()).query(query)

  return res.rows[0]
}

/**
 * Saves a Investor in database
 *
 * @param {Object} data - Investor data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  const query = `SELECT NOW()`

  const res = await (await db.connect()).query(query)

  return res.rows[0]
}

/**
 * Updates an Investor, given an id
 *
 * @param {Object} data - Investor data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = async data => {
  const query = `SELECT NOW()`

  const res = await (await db.connect()).query(query)

  return res.rows[0]
}

/**
 * Remove a Investor
 *
 * @param {Object} id - Investor data to be removed
 * @returns {Object} - Returns data
 */
export const remove = async id => {
  const query = `SELECT NOW()`

  const res = await (await db.connect()).query(query)

  return res.rows[0]
}
