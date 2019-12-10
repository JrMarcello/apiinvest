import db from '../../core/database'

const table = 'investor_bank_account'

/**
 * Find Accounts by Investor ID
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
 * Create Accounts
 *
 * @param {Object} data - Account data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  return db
    .insert('id_investor', 'bank_code', 'agency', 'account')
    .values(data)
    .into(table)
    .returning('*')
    .run()
}

/**
 * Remove an Account
 *
 * @param {uuid} idInvestor - Investor ID
 * @param {Object} id - Account id to be removed
 * @returns {Object} - Returns data
 */
export const remove = (idInvestor, id) => {
  return db
    .update(table)
    .set('active', false)
    .where('id', id)
    .and('id_investor', idInvestor)
    .run()
}
