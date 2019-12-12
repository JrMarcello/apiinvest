import * as dao from './dao'

/**
 * Find a Phone by Investor ID
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getByInvestorId = id => {
  return dao.getByInvestorId(id)
}

/**
 * Saves the Phones
 *
 * @param {string} idInvestor - Investor ID
 * @param {object[]} data - Phone data
 * @returns {object} - Returns a object
 */
export const create = async (idInvestor, data) => {
  const phones = data.map(phone => {
    phone.id_investor = idInvestor

    return phone
  })

  return dao.create(phones)
}

/**
 * Remove a Phone
 *
 * @param {string} idInvestor - Investor ID
 * @param {number[]} ids- Phone IDs
 * @returns - Returns a object
 */
export const remove = (idInvestor, ids) => {
  return dao.remove(idInvestor, ids)
}
