import * as dao from './dao'

/**
 *  Get all Accounts
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find an Account by ID
 *
 * @param {Interger} id - Account ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = id => {
  return dao.getById(id)
}

/**
 * Find an Account by Investor ID
 *
 * @param {Interger} id - Investor ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByInvestorId = id => {
  return dao.getByInvestorId(id)
}

/**
 * Saves the Account
 *
 * @param {Object} idInvestor - Investor id
 * @param {Object} data - Account data
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async (idInvestor, data) => {
  data.map(account => {
    account.id_investor = idInvestor

    return account
  })

  const accounts = dao.create(data)

  return accounts
}

/**
 * Updates an Account
 *
 * @param {Object} data - Account data
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  const updateble = {
    id: data.id,
    agency: data.agency,
    account: data.account
  }

  return dao.update(updateble)
}

/**
 * Remove an Account
 *
 * @param {Object} id - Account id
 * @returns {Function} - Returns a Promisse
 */
export const remove = id => {
  return dao.remove(id)
}
