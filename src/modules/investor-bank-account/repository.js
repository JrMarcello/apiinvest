import * as dao from './dao'

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
 * Saves the Accounts
 *
 * @param {uuid} idInvestor - Investor ID
 * @param {Object} data - Account data
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async (idInvestor, data) => {
  const accounts = data.map(account => {
    account.id_investor = idInvestor

    return account
  })

  return dao.create(accounts)
}

/**
 * Remove Accounts
 *
 * @param {uuid} idInvestor - Investor ID
 * @param {array} ids - Account id
 * @returns {Function} - Returns a Promisse
 */
export const remove = (idInvestor, ids) => {
  return dao.remove(idInvestor, ids)
}
