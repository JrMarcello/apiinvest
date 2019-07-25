import db from '@core/database'
import { generateUUID } from '@common/utils'

const table = 'investimento'

/**
 *  Find all Investiment
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = () => {
  return db
    .select()
    .from(table)
    .where('ativo', true)
    .run()
}

/**
 * Find a Investiment by ID
 *
 * @param {Interger} id - Investiment ID
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
 * Find Investiments by Investor ID
 *
 * @param {Interger} id - Investor ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByInvestorId = id => {
  return db
    .select()
    .from(table)
    .where('id_investidor', id)
    .and('ativo', true)
    .run()
}

/**
 * Find Investiments by Funding ID
 *
 * @param {Interger} id - Funding ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByFundingId = id => {
  return db
    .select()
    .from(table)
    .where('id_investidor', id)
    .and('ativo', true)
    .run()
}

/**
 * Create an Investiment
 *
 * @param {Object} data - Investiment data to be saved
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
 * Update an Investiment
 *
 * @param {Object} data - Investiment data to be updated
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
 * Remove an Investiment
 *
 * @param {Object} id - Investiment id to be removed
 * @returns {Object} - Returns data
 */
export const remove = id => {
  return db
    .update(table)
    .set('ativo', false)
    .where('id', id)
    .run()
}
