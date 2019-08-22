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
  const investor = await dao.create(data.investor)

  await phone.create(investor.id, data.phones)
  await bankAccount.create(investor.id, data.accounts)
  await document.create(investor.id, data.files)

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
