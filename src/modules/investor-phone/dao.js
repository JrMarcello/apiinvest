import db from '@core/database'

const table = 'investor_phone'

/**
 *  Find all Phones
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
 * Find a Phone by ID
 *
 * @param {Interger} id - Phone ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = async id => {
  return db
    .select()
    .from(table)
    .where('id', id)
    .and('active', true)
    .run()
}

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
    .and('active', true)
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
 * Update an Phone
 *
 * @param {Object} data - Phone data to be updated
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
 * Remove an Phone
 *
 * @param {Object} id - Phone id to be removed
 * @returns {Object} - Returns data
 */
export const remove = id => {
  return db
    .update(table)
    .set('active', false)
    .where('id', id)
    .run()
}
