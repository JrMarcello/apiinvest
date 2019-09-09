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
 * Saves the Phone
 *
 * @param {Object} data - Phone data
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  const phones = data.phones.map(phone => {
    phone.id_investor = data.id_investor

    return phone
  })

  return dao.create(phones)
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