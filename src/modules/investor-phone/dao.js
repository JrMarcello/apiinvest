import db from '../../core/database'

const table = 'investor_phone'

/**
 * Find Phones by Investor ID
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
 * Create Phones
 *
 * @param {object[]} data - Phone data
 * @returns - Returns a object
 */
export const create = data => {
  return db
    .insert('id_investor', 'number')
    .values(data)
    .into(table)
    .returning('*')
    .run()
}

/**
 * Remove Phones
 *
 * @param {string} idInvestor - Investor ID
 * @param {number[]} ids - Phone IDs
 * @returns - Returns data
 */
export const remove = (idInvestor, ids) => {
  return db
    .delete(table)
    .where('id_investor', idInvestor)
    .and('id', 'IN', ids)
    .run()
}
