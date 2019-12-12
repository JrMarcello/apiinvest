import db from '../../core/database'
import { generateUUID } from '../../common/utils'
import * as investmentDao from '../investment/dao'

const table = 'investor'

/**
 *  Find all Investors
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
 * Find a Investor by ID
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
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
 * @param {string} id - User ID
 * @returns - Returns a object
 */
export const getByUserId = async id => {
  return (
    await db
      .select()
      .from(table)
      .where('id_user', id)
      .and('active', true)
      .run()
  )[0]
}

/**
 *  Find all Investmes from Investor
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getAllInvestmentsById = id => {
  return investmentDao.getByInvestorId(id)
}

/**
 *  Find count of Investmes from Investor
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getInvestmentsCount = id => {
  return investmentDao.getCountByInvestorId(id)
}

/**
 *  Find the invested amount from Investor
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getInvestedAmount = async id => {
  return { amount: (await investmentDao.getInvestedAmount(id)).sum || 0 }
}

/**
 *  Find the amount received from Investor
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getReceivedAmount = async id => {
  return { amount: (await investmentDao.getReceivedAmount(id)).sum || 0 }
}

/**
 * Create an Investor
 *
 * @param {object} data - Investor data
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
 * Update an Investor
 *
 * @param {object} data - Investor data
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
 * Remove an Investor
 *
 * @param {string} id - Investor ID
 * @returns - Returns data
 */
export const remove = id => {
  return db
    .update(table)
    .set('active', false)
    .where('id', id)
    .run()
}
