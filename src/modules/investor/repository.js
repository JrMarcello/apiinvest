import * as phone from '../investor-phone/repository'
import * as bankAccount from '../investor-bank-account/repository'
import * as document from '../investor-document/repository'
import * as dao from './dao'

/**
 *  Get all Investors
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find a Investor by ID
 *
 * @param {Interger} id - Investor ID
 * @returns {Promisse} - Returns a Promisse
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
 * @param {Interger} id - User ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByUserId = async id => {
  const investor = await dao.getByUserId(id)

  if (investor) {
    investor.phones = await phone.getByInvestorId(investor.id)
    investor.accounts = await bankAccount.getByInvestorId(investor.id)
  }

  return investor
}

/**
 * Saves a Investor
 *
 * @param {Object} data - Investor data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  if (!data || data.length === 0) throw Error('Dados inválidos')
  if (!data.investor || data.investor.length === 0) throw Error('Informe seus dados')
  if (!data.phones || data.phones.length === 0) throw Error('Informe pelo menos 1 telefone')
  if (!data.accounts || data.accounts.length === 0) throw Error('Informe pelo menos 1 conta bancária')
  // if (!data.files || data.files.length === 0) throw Error('Envie fotos dos seu documento e comprovante de residência')
  // if (data.files && data.files.length !== 3) throw Error('Numeros de fotos inválido')

  const investor = await dao.create(data.investor)
  await phone.create({ id_investor: investor.id, phones: data.phones })
  await bankAccount.create({ id_investor: investor.id, accounts: data.accounts })
  // await document.create({ id_investor: investor.id, files: data.files })

  return investor
}

/**
 * Updates an Investor
 *
 * @param {Object} data - Investor data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  if (!data || data.length === 0) throw Error('Dados inválidos')

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
 * @param {Object} id - Investor id
 * @returns {Function} - Returns a Promisse
 */
export const remove = id => {
  return dao.remove(id)
}
