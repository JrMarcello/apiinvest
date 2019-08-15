import db from '@core/database'
import { generateUUID } from '@common/utils'

const table = 'investment'

/**
 *  Find all Investments
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
 * Find a Investment by ID
 *
 * @param {Interger} id - Investment ID
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
 * Find Investments by Investor ID
 *
 * @param {Interger} id - Investor ID
 * @returns {Promisse} - Returns a Promisse
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
 * @param {Interger} id - Fundraising ID
 * @returns {Promisse} - Returns a Promisse
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
 * Create an Investment
 *
 * @param {Object} data - Investment data to be saved
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
 * Update an Investment
 *
 * @param {Object} data - Investment data to be updated
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
 * Cancel an Investment
 *
 * @param {Object} id - Investment id
 * @returns {Object} - Returns data
 */
export const cancel = id => {
  return db
    .update(table)
    .set('active', false)
    .where('id', id)
    .run()
}
