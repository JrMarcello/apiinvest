import db from '@core/database'

const table = 'investor_document'

// /**
//  *  Find all Documents
//  *
//  * @param {Object} params - Params for query
//  * @returns {Promisse} - Returns a Promisse
//  */
// export const getAll = () => {
//   return db
//     .select()
//     .from(table)
//     .where('active', true)
//     .run()
// }

// /**
//  * Find an Document by ID
//  *
//  * @param {Interger} id - Document ID
//  * @returns {Promisse} - Returns a Promisse
//  */
// export const getById = async id => {
//   return db
//     .select()
//     .from(table)
//     .where('id', id)
//     .and('active', true)
//     .run()
// }

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
    .and('active', true)
    .run()
}

/**
 * Create an Document
 *
 * @param {Object} data - Document data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  return db
    .insert(data)
    .into(table)
    .returning('*')
    .run()
}

// /**
//  * Update an Document
//  *
//  * @param {Object} data - Document data to be updated
//  * @returns {Promisse} - Returns a Promisse
//  */
// export const update = data => {
//   return db
//     .update(table)
//     .set(data)
//     .where('id', data.id)
//     .run()
// }

// /**
//  * Remove an Document
//  *
//  * @param {Object} id - Document id to be removed
//  * @returns {Object} - Returns data
//  */
// export const remove = id => {
//   return db
//     .update(table)
//     .set('active', false)
//     .where('id', id)
//     .run()
// }
