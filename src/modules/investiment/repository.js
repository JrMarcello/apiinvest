import * as dao from './dao'

/**
 *  Get all Investiment from database.
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find a Investiment by ID
 *
 * @param {Interger} id - Investiment ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = id => {
  return dao.getById(id)
}

/**
 * Find Investiments by Investor ID
 *
 * @param {Interger} id - Investor ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByInvestorId = id => {
  return dao.getByInvestorId(id)
}

/**
 * Find a Investiments by Captation ID
 *
 * @param {Interger} id - Captation ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByCaptationId = id => {
  return dao.getByCaptationId(id)
}

/**
 * Saves a Investiment in database
 *
 * @param {Object} data - Investiment data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = data => {
  return dao.create(data)
}

/**
 * Updates an Investiment, given an id
 *
 * @param {Object} data - Investiment data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  const updateble = {
    id: data.id,
    valor: data.valor,
    percentual: data.percentual,
    data: data.data,
    confirmado: data.confirmado
  }

  return dao.update(updateble)
}

/**
 * Remove a Investiment
 *
 * @param {Object} id - Investiment id
 * @returns {Function} - Returns the callback function
 */
export const remove = id => {
  return dao.remove(id)
}
