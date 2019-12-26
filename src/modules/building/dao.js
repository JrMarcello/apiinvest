import db from '../../core/database'
import { generateUUID } from '../../common/utils'

const table = 'building'

/**
 *  Find all Builder
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
 *  Find all avaliables to investment Builder
 *
 * @param {object} params - Params for query
 * @returns - Returns a object
 */
export const getAllAvaliables = async () => {
  const query = {
    text: `SELECT b.* FROM ${table} b JOIN fundraising f ON (b.id = f.id_building AND f.active AND f.finished = false) WHERE b.active`
    // values: [data]
  }

  return (await db.query(query)).rows
}

/**
 * Find a Builder by ID
 *
 * @param {string} id - Builder ID
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
 * Find a Builder by User ID
 *
 * @param {string} id - User ID
 * @returns - Returns a object
 */
export const getByBuilderId = id => {
  return db
    .select()
    .from(table)
    .where('id_builder', id)
    .and('active', true)
    .run()
}

/**
 * Create an Builder
 *
 * @param {object} data - Builder data
 * @returns - Returns a object
 */
export const create = async data => {
  data.id = await generateUUID()

  return (
    await db
      .insert(data)
      .into(table)
      .returning('*')
      .run()
  )[0]
}

/**
 * Update an Builder
 *
 * @param {object} data - Builder data
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
 * Remove an Builder
 *
 * @param {stringt} id - Builder ID
 * @returns - Returns data
 */
export const remove = id => {
  return db
    .update(table)
    .set('active', false)
    .where('id', id)
    .run()
}
