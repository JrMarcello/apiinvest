import db from '../../core/database'
import { generateUUID } from '../../common/utils'

const table = 'custodian'

/**
 *  Find all Custodians
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
 * Find a Custodian by ID
 *
 * @param {string} id - Custodian ID
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
 * Create an Custodian
 *
 * @param {object} data - Custodian data
 * @returns - Returns a object
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
 * Update an Custodian
 *
 * @param {object} data - Custodian data
 * @returns - Returns a object
 */
export const update = data => {
  return db
    .update(table)
    .set(data)
    .where('id', data.id)
    .run()
}

/**
 * Remove an Custodian
 *
 * @param {string} id - Custodian ID
 * @returns - Returns data
 */
export const remove = id => {
  return db
    .update(table)
    .set('active', false)
    .where('id', id)
    .run()
}
