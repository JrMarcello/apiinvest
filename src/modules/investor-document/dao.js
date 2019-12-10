import db from '../../core/database'

const table = 'investor_document'

/**
 * Find Documents by Investor ID
 *
 * @param {Interger} id - Investor ID
 * @returns {Promisse} - Returns a Promisse
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
 * @param {Object} data - Document data to be saved
 * @returns {Promisse} - Returns a Promisse
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
 * @param {uuid} idInvestor - Investor ID
 * @returns {Object} - Returns data
 */
export const remove = idInvestor => {
  return db
    .delete(table)
    .where('id_investor', idInvestor)
    .run()
}
