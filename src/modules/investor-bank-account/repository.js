import * as dao from './dao'

/**
 * Find an Account by Investor ID
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getByInvestorId = id => {
  return dao.getByInvestorId(id)
}

/**
 * Saves the Accounts
 *
 * @param {string} idInvestor - Investor ID
 * @param {object[]} data - Account data
 * @returns - Returns a object
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
 * @param {string} idInvestor - Investor ID
 * @param {number[]} ids - Account IDs
 * @returns - Returns a object
 */
export const remove = (idInvestor, ids) => {
  return dao.remove(idInvestor, ids)
}
