import db from '../../core/database'
import { generateUUID } from '../../common/utils'

const table = 'investment'

/**
 *  Find all Investments
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
 * Find a Investment by ID
 *
 * @param {string} id - Investment ID
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
 * Find a Investment by ID
 *
 * @param {string} id - Investment ID
 * @returns - Returns a object
 */
export const getByIdMe = async (idInvestor, id) => {
  return (
    await db
      .select()
      .from(table)
      .where('id', id)
      .and('id_investor', idInvestor)
      .and('active', true)
      .run()
  )[0]
}

/**
 * Find Investments by Investor ID
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getByInvestorId = id => {
  return db
    .select()
    .from(table)
    .where('id_investor', id)
    .and('active', true)
    .run()
}

/**
 * Find Investments by Fundraising ID
 *
 * @param {strning} id - Fundraising ID
 * @returns - Returns a object
 */
export const getByFundraisingId = id => {
  return db
    .select()
    .from(table)
    .where('id_fundraising', id)
    .and('active', true)
    .run()
}

/**
 *  Find all pendings Investments
 *
 * @param {object} params - Params for query
 * @returns - Returns a object
 */
export const getPendings = async () => {
  const query = `SELECT * FROM ${table} WHERE ted_proof_url IS NOT NULL AND confirmed = false AND active`

  return (await db.query(query)).rows
}

/**
 * Find count of Investmes from Investor
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getCountByInvestorId = async id => {
  return (
    await db
      .select('count(id)')
      .from(table)
      .where('id_investor', id)
      .and('confirmed', true)
      .and('active', true)
      .run()
  )[0]
}

/**
 * Find count of Investmes from Investor
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getInvestedAmount = async id => {
  return (
    await db
      .select('sum(amount)')
      .from(table)
      .where('id_investor', id)
      .and('confirmed', true)
      .and('active', true)
      .run()
  )[0]
}

/**
 * Create an Investment
 *
 * @param {object} data - Investment data to be saved
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
 * Update an Investment
 *
 * @param {object} data - Investment data
 * @returns - Returns a object
 */
export const confirm = async data => {
  const query = {
    text: `UPDATE ${table} SET confirmed = true WHERE id = ANY($1::uuid[])`,
    values: [data]
  }

  return (await db.query(query)).rows[0]
}

/**
 * Update an Investment
 *
 * @param {object} data - Investment data
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
 * Cancel an Investment
 *
 * @param {string} id - Investment ID
 * @returns - Returns data
 */
export const cancel = id => {
  return db
    .update(table)
    .set('active', false)
    .where('id', id)
    .run()
}
