import db from '../../core/database'

const table = 'building_image'

/**
 * Find Images by Building ID
 *
 * @param {string} id - Building ID
 * @returns - Returns a object
 */
export const getByBuildingId = id => {
  return db
    .select()
    .from(table)
    .where('id_building', id)
    .run()
}

/**
 * Create Images
 *
 * @param {object} data - Image data
 * @returns - Returns a object
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
 * Remove Images
 *
 * @param {string} idBuilding - Building ID
 * @param {number[]} ids - Image id
 * @returns - Returns object
 */
export const remove = (idBuilding, ids) => {
  return db
    .delete(table)
    .where('id_building', idBuilding)
    .and('id', 'IN', ids)
    .run()
}
