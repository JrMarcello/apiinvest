import * as dao from './dao'

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
 * Saves the Phones
 *
 * @param {uuid} idInvestor - Investor ID
 * @param {array} data - Phone data
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
 * Remove a Phone
 *
 * @param {uuid} idInvestor - Investor ID
 * @param {array} id s- Phone IDs
 * @returns {Function} - Returns a Promisse
 */
export const remove = (idInvestor, ids) => {
  return dao.remove(idInvestor, ids)
}
