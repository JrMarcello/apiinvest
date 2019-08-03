import * as dao from './dao'

/**
 *  Get all Partners
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find a Partner by ID
 *
 * @param {Interger} id - Partner ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = id => {
  return dao.getById(id)
}

/**
 * Saves a Partner
 *
 * @param {Object} data - Partner data
 * @returns {Promisse} - Returns a Promisse
 */
export const create = data => {
  return dao.create(data)
}

/**
 * Updates an Partner
 *
 * @param {Object} data - Partner data
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  const updateble = {
    id: data.id
  }

  return dao.update(updateble)
}

/**
 * Remove an Partner
 *
 * @param {Object} id - Partner ID
 * @returns {Function} - Returns a Promisse
 */
export const remove = id => {
  return dao.remove(id)
}
