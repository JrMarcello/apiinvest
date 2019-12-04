import db from '../../core/database'

const table = 'builder_phone'

/**
 * Find Phones by Builder ID
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
 * Create an Phone
 *
 * @param {Object} data - Phone data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  return db
    .insert('id_builder', 'number')
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
