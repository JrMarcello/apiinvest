import * as phone from '@modules/investor-phone/repository'
import * as bankAccount from '@modules/investor-bank-account/repository'
import * as document from '@modules/investor-document/repository'
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
export const getById = id => {
  return dao.getById(id)
}

/**
 * Find a Investor by User ID
 *
 * @param {Interger} id - User ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByUserId = id => {
  return dao.getByUserId(id)
}

/**
 * Saves a Investor
 *
 * @param {Object} data - Investor data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  if (!data.investor || data.investor.length === 0) throw Error('Informe seus dados')
  if (!data.phones || data.phones.length === 0) throw Error('Informe pelo menos 1 telefone')
  if (!data.accounts || data.accounts.length === 0) throw Error('Informe pelo menos 1 conta bancária')
  if (!data.files || data.files.length === 0) throw Error('Envie fotos dos seu documento e comprovante de residência')
  if (data.files && data.files.length !== 3) throw Error('Numeros de fotos inválido')

  const investor = await dao.create(data.investor)
  await phone.create({ id_investor: investor.id, phones: data.phones })
  await bankAccount.create(Object.assign({ id_investor: investor.id }, { accounts: data.accounts }))
  await document.create(Object.assign({ id_investor: investor.id }, { files: data.files }))

  return investor
}

/**
 * Updates an Investor
 *
 * @param {Object} data - Investor data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  const updateble = {
    id: data.id,
    nome: data.nome,
    razao_social: data.razao_social,
    endereco: data.endereco
  }

  if (data.cpf) updateble.cpf = data.cpf
  if (data.cnpj) updateble.cnpj = data.cnpj

  return dao.update(updateble)
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
