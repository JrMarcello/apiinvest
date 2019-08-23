import * as dao from './dao'

/**
 *  Get all Phones
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find a Phone by ID
 *
 * @param {Interger} id - Phone ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = id => {
  return dao.getById(id)
}

/**
 * Find a Phone by Investor ID
 *
 * @param {Interger} id - Investor ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByInvestorId = id => {
  return dao.getByInvestorId(id)
}

/**
 * Saves the Phone
 *
 * @param {Object} idInvestor - Investor ID
 * @param {Object} data - Phone data
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async (idInvestor, data) => {
  const phones = data.map(phone => {
    phone.id_investor = idInvestor

    return phone
  })

  return dao.create(phones)
}

/**
 * Updates a Phone
 *
 * @param {Object} data - Phone data
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  const updateble = {
    id: data.id,
    number: data.nome
  }

  return dao.update(updateble)
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
