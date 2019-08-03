import constants from '@common/constants'
import * as dao from './dao'

/**
 *  Get all Custodians
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find a Custodian by ID
 *
 * @param {Interger} id - Custodian ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = id => {
  return dao.getById(id)
}

/**
 * Saves a Custodian
 *
 * @param {Object} data - Custodian data
 * @returns {Promisse} - Returns a Promisse
 */
export const create = data => {
  return dao.create(data)
}

/**
 * Updates an Custodian
 *
 * @param {Object} data - Custodian data
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  const updateble = {
    id: data.id,
    cnpj: data.cnpj,
    company_name: data.company_name,
    company_fancy_name: data.company_fancy_name,
    phone: data.phone
  }

  return dao.update(updateble)
}

/**
 * Remove an Custodian
 *
 * @param {Object} id - Custodian ID
 * @returns {Function} - Returns a Promisse
 */
export const remove = id => {
  return dao.remove(id)
}
