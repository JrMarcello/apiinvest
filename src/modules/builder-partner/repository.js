import * as dao from './dao'

/**
 * Find a Partner by Builder ID
 *
 * @param {Interger} id - Builder ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByBuilderId = id => {
  return dao.getByBuilderId(id)
}

/**
 * Saves the Partner
 *
 * @param {UUID} idBuilder - Builder ID
 * @param {Object} data - Partner data
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async (idBuilder, data) => {
  const partners = data.map(partner => {
    partner.id_builder = idBuilder

    return partner
  })

  return dao.create(partners)
}

/**
 * Remove a Partner
 *
 * @param {Object} idBuiler - Builder ID
 * @param {Object} id - Partner ID
 * @returns {Function} - Returns a Promisse
 */
export const remove = (idBuilder, id) => {
  return dao.remove(idBuilder, id)
}
