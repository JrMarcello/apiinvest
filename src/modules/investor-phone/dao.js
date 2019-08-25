import db from '@core/database'

const table = 'investor_phone'

/**
 * Find Phones by Investor ID
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
 * Create an Phone
 *
 * @param {Object} data - Phone data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  return db
    .insert('id_investor', 'number')
    .values(data)
    .into(table)
    .returning('*')
    .run()
}

/**
 * Remove an Phone
 *
 * @param {Object} id - Phone id to be removed
 * @returns {Object} - Returns data
 */
export const remove = id => {
  return db
    .delete(table)
    .where('id', id)
    .run()
}
