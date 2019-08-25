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
 * Saves the Account
 *
 * @param {Object} data - Account data
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  const accounts = data.accounts.map(account => {
    account.id_investor = data.id_investor

    return account
  })

  return dao.create(accounts)
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
