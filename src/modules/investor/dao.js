import db from '@core/database'
import { generateUUID } from '@common/utils'

const table = 'investor'

/**
 *  Find all Investors
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
 * Find a Investor by ID
 *
 * @param {Interger} id - Investor ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = async id => {
  const query = {
    name: 'get-investor-by-id',
    text: `SELECT
               u.email,
               u.username,
               i.*
           FROM
               ${table} i
               JOIN "user" u ON i.id_user = u.id
           WHERE
               i.id = $1
               AND i.active`,
    values: [id]
  }

  return (await db.query(query)).rows[0]
}

/**
 * Find a Investor by User ID
 *
 * @param {Interger} id - User ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByUserId = async id => {
  return (await db
    .select()
    .from(table)
    .where('id_user', id)
    .and('active', true)
    .run())[0]
}

/**
 * Create an Investor
 *
 * @param {Object} data - Investor data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  data.id = await generateUUID()

  return (await db
    .insert(data)
    .into(table)
    .returning('*')
    .run())[0]
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
    .set('active', false)
    .where('id', id)
    .run()
}
