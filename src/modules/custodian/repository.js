import * as dao from './dao'

/**
 *  Get all Custodians
 *
 * @param {object} params - Params for query
 * @returns - Returns a object
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find a Custodian by ID
 *
 * @param {string} id - Custodian ID
 * @returns - Returns a object
 */
export const getById = id => {
  return dao.getById(id)
}

/**
 * Saves a Custodian
 *
 * @param {object} data - Custodian data
 * @returns - Returns a object
 */
export const create = data => {
  return dao.create({
    cnpj: data.cnpj,
    company_name: data.company_name,
    company_fancy_name: data.company_fancy_name,
    phone: data.phone,
    agent_name: data.agent_name,
    agent_email: data.agent_email,
    agent_phone: data.agent_phone
  })
}

/**
 * Updates an Custodian
 *
 * @param {object} data - Custodian data
 * @returns - Returns a object
 */
export const update = data => {
  return dao.update({
    id: data.id,
    cnpj: data.cnpj,
    company_name: data.company_name,
    company_fancy_name: data.company_fancy_name,
    phone: data.phone,
    agent_name: data.agent_name,
    agent_email: data.agent_email,
    agent_phone: data.agent_phone
  })
}

/**
 * Remove an Custodian
 *
 * @param {string} id - Custodian ID
 * @returns - Returns a object
 */
export const remove = id => {
  return dao.remove(id)
}
