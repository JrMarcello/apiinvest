import * as dao from './dao'

/**
 * Find a Partner by Builder ID
 *
 * @param {string} id - Builder ID
 * @returns - Returns a object
 */
export const getByBuilderId = id => {
  return dao.getByBuilderId(id)
}

/**
 * Saves the Partner
 *
 * @param {string} idBuilder - Builder ID
 * @param {object} data - Partner data
 * @returns - Returns a object
 */
export const create = async (idBuilder, data) => {
  const partners = data.map(partner => {
    partner.id_builder = idBuilder

    return partner
  })

  return dao.create(partners)
}

/**
 * Remove Partners
 *
 * @param {string} idBuiler - Builder ID
 * @param {number[]} ids - Partner IDs
 * @returns - Returns a object
 */
export const remove = (idBuilder, ids) => {
  return dao.remove(idBuilder, ids)
}
