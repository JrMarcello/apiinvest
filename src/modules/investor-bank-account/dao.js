import db from '../../core/database'

const table = 'investor_bank_account'

/**
 * Find Accounts by Investor ID
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
 * Create Accounts
 *
 * @param {object[]} data - Account data
 * @returns - Returns a object
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
 * Remove Accounts
 *
 * @param {string} idInvestor - Investor ID
 * @param {numnber[]} ids - Account IDs
 * @returns - Returns data
 */
export const remove = (idInvestor, ids) => {
  return db
    .update(table)
    .set('active', false)
    .where('id_investor', idInvestor)
    .and('id', 'IN', ids)
    .run()
}
