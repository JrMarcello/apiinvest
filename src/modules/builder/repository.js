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

  const builder = await dao.create({
    id: data.builder.id,
    cnpj: data.builder.cnpj,
    company_name: data.builder.company_name,
    company_fancy_name: data.builder.company_fancy_name,
    address_street: data.builder.address_street,
    address_number: data.builder.address_number,
    address_neighborhood: data.builder.address_neighborhood,
    address_city: data.builder.address_city,
    address_state: data.builder.address_state,
    address_country: data.builder.address_country,
    address_cep: data.builder.address_cep
  })

  await phone.create({ id_builder: builder.id, phones: data.phones })

  if (data.partners && data.partners.length !== 0) {
    await partner.create({ id_builder: builder.id, partners: data.partners })
  }

  return builder
}

/**
 * Updates an Builder
 *
 * @param {Object} data - Builder data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = async data => {
  if (!data || data.length === 0) throw Error('Invalid data')

  return dao.update({
    id: data.id,
    cnpj: data.cnpj,
    company_name: data.company_name,
    company_fancy_name: data.company_fancy_name,
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
 * Remove an Builder
 *
 * @param {Object} id - Builder id
 * @returns {Function} - Returns a Promisse
 */
export const remove = id => {
  return dao.remove(id)
}
