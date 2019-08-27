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
 * @param {Object} data - Partner data
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  const partners = data.partners.map(partner => {
    partner.id_builder = data.id_builder

    return partner
  })

  return dao.create(partners)
}

/**
 * Remove a Partner
 *
 * @param {Object} id - Partner id
 * @returns {Function} - Returns a Promisse
 */
export const remove = id => {
  return dao.remove(id)
}
