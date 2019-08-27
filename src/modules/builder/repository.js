import * as phone from '@modules/builder-phone/repository'
import * as partner from '@modules/builder-partner/repository'
import * as building from '@modules/building/repository'
import * as dao from './dao'

/**
 *  Get all Builders
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find a Builder by ID
 *
 * @param {Interger} id - Builder ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = async id => {
  const builder = await dao.getById(id)

  if (builder) {
    builder.phones = await phone.getByBuilderId(builder.id)
    builder.partners = await partner.getByBuilderId(builder.id)
    builder.buildings = await building.getByBuilderId(builder.id)
  }

  return builder
}

/**
 * Find a Builder by User ID
 *
 * @param {Interger} id - User ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByUserId = id => {
  return dao.getByUserId(id)
}

/**
 * Saves a Builder
 *
 * @param {Object} data - Builder data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  if (!data.builder || data.builder.length === 0) throw Error('Informe seus dados')
  if (!data.phones || data.phones.length === 0) throw Error('Informe pelo menos 1 telefone')

  const builder = await dao.create(data.builder)

  await phone.create({ id_builder: builder.id, phones: data.phones })

  if (data.partners && data.partners.length !== 0) {
    await partner.create(Object.assign({ id_builder: builder.id }, { partners: data.partners }))
  }

  return builder
}

/**
 * Updates an Builder
 *
 * @param {Object} data - Builder data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  const updateble = {
    id: data.id,
    razao_social: data.razao_social,
    nome_fantasia: data.nome_fantasia,
    endereco: data.endereco
  }

  if (data.cnpj) updateble.cnpj = data.cnpj

  return dao.update(updateble)
}

/**
 * Remove an Builder
 *
 * @param {Object} id - Builder id
 * @returns {Function} - Returns a Promisse
 */
export const remove = id => {
  return dao.remove(id)
}
