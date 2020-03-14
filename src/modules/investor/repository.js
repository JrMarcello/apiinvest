import constants from '../../common/constants'
import * as phone from '../investor-phone/repository'
import * as bankAccount from '../investor-bank-account/repository'
import * as document from '../investor-document/repository'
import * as dao from './dao'

/**
 *  Get all Investors
 *
 * @param {object} params - Params for query
 * @returns - Returns a object
 */
export const getAll = params => {
  return dao.getAll(params)
}

/**
 * Find a Investor by ID
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getById = async id => {
  const investor = await dao.getById(id)

  if (investor) {
    investor.phones = await phone.getByInvestorId(investor.id)
    investor.accounts = await bankAccount.getByInvestorId(investor.id)
  }

  return investor
}

/**
 * Find a Investor by User ID
 *
 * @param {string} id - User ID
 * @returns - Returns a object
 */
export const getByUserId = id => {
  return dao.getByUserId(id)
}

/**
 *  Get all Investments
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getAllInvestmentsById = id => {
  return dao.getAllInvestmentsById(id)
}

/**
 *  Get the total number of investments from Investor
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getInvestmentsCount = id => {
  return dao.getInvestmentsCount(id)
}

/**
 *  Get the invested amount from Investor
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getInvestedAmount = id => {
  return dao.getInvestedAmount(id)
}

/**
 *  Get the amount received from Investor
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getReceivedAmount = id => {
  return dao.getReceivedAmount(id)
}

/**
 *  Get the projected amount from Investor
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getProjectedAmount = id => {
  return dao.getProjectedAmount(id)
}

/**
 * Saves a Investor
 *
 * @param {object} data - Investor data
 * @returns - Returns a object
 */
export const create = async data => {
  if (!data || data.length === 0 || !data.investor || data.investor.length === 0) throw constants.investor.error.INVALID_DATA
  if (!data.phones || data.phones.length === 0) throw constants.investor.phone.error.REQUIRED
  if (!data.accounts || data.accounts.length === 0) throw constants.investor.bank_account.error.REQUIRED
  if (!data.files || data.files.length !== 3) throw constants.investor.document.error.REQUIRED

  const investor = await dao.create(data.investor)

  await phone.create(investor.id, data.phones)
  await bankAccount.create(investor.id, data.accounts)
  await document.create(investor.id, data.files)

  return investor
}

/**
 * Updates an Investor
 *
 * @param {object} data - Investor data
 * @returns - Returns a object
 */
export const update = data => {
  if (!data || data.length === 0) throw constants.investor.error.INVALID_DATA

  return dao.update({
    id: data.id,
    cpf: data.cpf,
    cnpj: data.cnpj,
    name: data.name,
    company_name: data.company_name,
    address_street: data.address_street,
    address_number: data.address_number,
    address_neighborhood: data.address_neighborhood,
    address_city: data.address_city,
    address_state: data.address_state,
    address_country: data.address_country,
    address_cep: data.address_cep
  })
}

/**
 * Remove an Investor
 *
 * @param {object} id - Investor id
 * @returns - Returns a object
 */
export const remove = id => {
  return dao.remove(id)
}
