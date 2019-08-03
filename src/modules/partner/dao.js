import db from '@core/database'
import { generateUUID } from '@common/utils'

const table = 'partner'

/**
 *  Find all Partners
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
 * Find a Partner by ID
 *
 * @param {Interger} id - Partner ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = id => {
  return db
    .select()
    .from(table)
    .where('id', id)
    .and('active', true)
    .run()
}

/**
 * Create an Partner
 *
 * @param {Object} data - Partner data t
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  data.id = await generateUUID()

  return db
    .insert(data)
    .into(table)
    .returning('*')
    .run()
}

/**
 * Update an Partner
 *
 * @param {Object} data - Partner data
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
 * Remove an Partner
 *
 * @param {Object} id - Partner ID
 * @returns {Object} - Returns data
 */
export const remove = id => {
  return db
    .update(table)
    .set('active', false)
    .where('id', id)
    .run()
}
