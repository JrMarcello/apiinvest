import * as dao from './dao'

// /**
//  * Main validate
//  *
//  * @param {Object} data - User data to validate
//  */
// const _validate = async data => {
//   if (!data || Object.keys(data).length === 0)
//     throw new Error('Constante de validação dos campos de User')
// }

/**
 *  Get all User from database.
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find a User by ID
 *
 * @param {Interger} id - User ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = id => {
  return dao.getById(id)
}

/**
 * Saves a User in database
 *
 * @param {Object} data - User data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = data => {
  // await _validate(data)

  return dao.create(data)
}

/**
 * Updates an User, given an id
 *
 * @param {Object} data - User data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  // await _validate(data)

  return dao.update(data.id, data)
}

/**
 * Remove a User
 *
 * @param {Object} id - User data to be removed
 * @returns {Function} - Returns the callback function
 */
export const remove = id => {
  return dao.remove(id)
}
