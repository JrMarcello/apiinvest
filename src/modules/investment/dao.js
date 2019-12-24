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
 * @param {string} idInvestor - Investor ID
 * @returns - Returns a object
 */
export const getById = async (id, idInvestor) => {
  if (idInvestor)
    return (
      await db
        .select()
        .from(table)
        .where('id', id)
        .and('id_investor', idInvestor)
        .and('active', true)
        .run()
    )[0]

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
  return db
    .select()
    .from(table)
    .where('ted_proof_url', 'IS NOT', null)
    .and('confirmed', false)
    .and('active', true)
    .run()
}

/**
 * Find amount of Investmes from Fundraising
 *
 * @param {string} id - Fundraising ID
 * @returns - Returns a object
 */
export const getAmountByFundraisingId = async id => {
  return (
    await db
      .select('sum(amount)')
      .from(table)
      .where('id_fundraising', id)
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
 * Find the invested amount from Investor
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
 * Find the amount received from Investor
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getReceivedAmount = async id => {
  return (
    await db
      .select('sum(amount_returned)')
      .from(table)
      .where('id_investor', id)
      .and('confirmed', true)
      .and('active', true)
      .run()
  )[0]
}

/**
 * Get Fundraising's investors
 *
 * @param {string} id - Fundraising ID
 * @returns - Returns a object
 */
export const getInvestorsByFundraisingId = async id => {
  const query = {
    text: `SELECT 
               b.id,
               b.name,
               c.avatar_url
           FROM ${table} a 
               JOIN investor b ON (a.id_investor = b.id) 
               JOIN "user" c ON (b.id_user = c.id) 
           WHERE a.id_fundraising = $1`,
    values: [id]
  }

  return (await db.query(query)).rows
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
 * Set TED proof for an Investment
 *
 * @param {object} file - TED proof
 * @param {string} id - Investment ID
 * @param {string} idInvestor - Investor ID
 * @returns - Returns a object
 */
export const sendTED = (url, id, idInvestor) => {
  if (idInvestor)
    return db
      .update(table)
      .set('ted_proof_url', url)
      .where('id', id)
      .and('id_investor', idInvestor)
      .run()

  return db
    .update(table)
    .set('ted_proof_url', url)
    .where('id', id)
    .run()
}

/**
 * Update an Investment
 *
 * @param {object[]} investments - Investment IDs
 * @returns - Returns a object
 */
export const confirm = async investments => {
  const query = {
    text: `UPDATE ${table} SET confirmed = true WHERE id = ANY($1::uuid[]) AND ted_proof_url IS NOT null`,
    values: [investments]
  }

  return (await db.query(query)).rows[0]
}

/**
 * Cancel an Investment
 *
 * @param {string} id - Investment ID
 * @param {string} idInvestor - Investor ID
 * @returns - Returns data
 */
export const cancel = (id, idInvestor) => {
  if (idInvestor)
    return db
      .update(table)
      .set('active', false)
      .where('id', id)
      .and('id_investor', idInvestor)
      .run()

  return db
    .update(table)
    .set('active', false)
    .where('id', id)
    .run()
}
