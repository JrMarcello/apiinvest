import db from '@core/database'

const table = 'builder_partner'

/**
 * Find Partners by Builder ID
 *
 * @param {Interger} id - Builder ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByBuilderId = id => {
  return db
    .select()
    .from(table)
    .where('id_builder', id)
    .run()
}

/**
 * Create an Partner
 *
 * @param {Object} data - Partner data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  // return db
  //   .insert('id_builder', 'number')
  //   .values(data)
  //   .into(table)
  //   .returning('*')
  //   .run()
}

/**
 * Remove an Partner
 *
 * @param {Object} id - Partner id to be removed
 * @returns {Object} - Returns data
 */
export const remove = id => {
  return db
    .delete(table)
    .where('id', id)
    .run()
}
