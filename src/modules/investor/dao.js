import db from '@core/database'
import { generateUUID } from '@common/utils'

const table = 'investidor'

/**
 *  Find all Investor
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = () => {
  // const query = `SELECT * FROM ${table} WHERE ativo`
  // return db.query(query)

  return db
    .select()
    .from(table)
    .where('ativo', true)
    .run()
}

/**
 * Find a Investor by ID
 *
 * @param {Interger} id - Investor ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = id => {
  return db
    .select()
    .from(table)
    .where('id', id)
    .and('ativo', true)
    .run()
}

/**
 * Create an Investor
 *
 * @param {Object} data - Investor data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  data.id = await generateUUID()

  return db
    .insert(data)
    .into(table)
    .run()
}

/**
 * Update an Investor
 *
 * @param {Object} data - Investor data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  return db
    .update(table)
    .set(data)
    .where('id', data.id)
    .run()
}

/**
 * Remove an Investor
 *
 * @param {Object} id - Investor id to be removed
 * @returns {Object} - Returns data
 */
export const remove = id => {
  return db
    .update(table)
    .set('ativo', false)
    .where('id', id)
    .run()
}
