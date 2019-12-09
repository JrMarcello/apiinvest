import * as dao from './dao'

/**
 * Find a Phone by Builder ID
 *
 * @param {Interger} id - Builder ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByBuilderId = id => {
  return dao.getByBuilderId(id)
}

/**
 * Saves the Phone
 *
 * @param {UUID} idBuilder - Builder ID
 * @param {Object[]} data - Phone data
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async (idBuilder, data) => {
  const phones = data.map(phone => {
    phone.id_builder = idBuilder

    return phone
  })

  return dao.create(phones)
}

/**
 * Remove a Phone
 *
 * @param {Object} idBuilder - Builder ID
 * @param {Object} id - Phone ID
 * @returns {Function} - Returns a Promisse
 */
export const remove = (idBuilder, id) => {
  return dao.remove(idBuilder, id)
}
