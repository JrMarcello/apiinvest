import db from '../../core/database'

const table = 'investor_document'

/**
 * Find Documents by Investor ID
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getByInvestorId = id => {
  return db
    .select()
    .from(table)
    .where('id_investor', id)
    .run()
}

/**
 * Create Documents
 *
 * @param {object[]} data - Document data to be saved
 * @returns - Returns a object
 */
export const create = async data => {
  return db
    .insert('id_investor', 'url', 'order')
    .values(data)
    .into(table)
    .returning('*')
    .run()
}

/**
 * Remove docs
 *
 * @param {string} idInvestor - Investor ID
 * @returns - Returns data
 */
export const remove = idInvestor => {
  return db
    .delete(table)
    .where('id_investor', idInvestor)
    .run()
}
