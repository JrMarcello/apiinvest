import db from '../../core/database'

const table = 'building_image'

/**
 * Find Images by Building ID
 *
 * @param {Interger} id - Building ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByBuildingId = id => {
  return db
    .select()
    .from(table)
    .where('id_building', id)
    .run()
}

/**
 * Create an Image
 *
 * @param {Object} data - Image data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  return db
    .insert('id_building', 'url')
    .values(data)
    .into(table)
    .returning('*')
    .run()
}

/**
 * Remove an Image
 * @param {uuid} idBuilding - Building ID
 * @param {array} ids - Image id
 * @returns {Object} - Returns data
 */
export const remove = (idBuilding, ids) => {
  return db
    .delete(table)
    .where('id_building', idBuilding)
    .and('id', 'IN', ids)
    .run()
}
