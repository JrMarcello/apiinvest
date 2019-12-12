import db from '../../core/database'

const table = 'builder_phone'

/**
 * Find Phones by Builder ID
 *
 * @param {string} id - Builder ID
 * @returns - Returns a object
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
 * @param {object} data - Phone data to be saved
 * @returns - Returns a object
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
 * Remove Phones
 *
 * @param {string} IdBuilder - Builder ID
 * @param {number[]} ids - Phone IDs
 * @returns - Returns a object
 */
export const remove = (idBuilder, ids) => {
  return db
    .delete(table)
    .where('id_builder', idBuilder)
    .and('id', 'IN', ids)
    .run()
}
