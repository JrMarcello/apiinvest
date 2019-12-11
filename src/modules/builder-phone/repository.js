import * as dao from './dao'

/**
 * Find a Phone by Builder ID
 *
 * @param {string} id - Builder ID
 * @returns - Returns a object
 */
export const getByBuilderId = id => {
  return dao.getByBuilderId(id)
}

/**
 * Saves the Phone
 *
 * @param {string} idBuilder - Builder ID
 * @param {Object[]} data - Phone data
 * @returns - Returns a object
 */
export const create = async (idBuilder, data) => {
  const phones = data.map(phone => {
    phone.id_builder = idBuilder

    return phone
  })

  return dao.create(phones)
}

/**
 * Remove Phones
 *
 * @param {string} idBuilder - Builder ID
 * @param {number[]} ids - Phone IDs
 * @returns - Returns a object
 */
export const remove = (idBuilder, ids) => {
  return dao.remove(idBuilder, ids)
}
