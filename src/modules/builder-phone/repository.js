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
 * @param {Object} data - Phone data
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  const phones = data.phones.map(phone => {
    phone.id_builder = data.id_builder

    return phone
  })

  return dao.create(phones)
}

/**
 * Remove a Phone
 *
 * @param {Object} id - Phone id
 * @returns {Function} - Returns a Promisse
 */
export const remove = id => {
  return dao.remove(id)
}
