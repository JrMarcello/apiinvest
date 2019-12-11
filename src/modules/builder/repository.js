import * as phone from '../builder-phone/repository'
import * as partner from '../builder-partner/repository'
import * as building from '../building/repository'
import * as dao from './dao'

/**
 *  Get all Builders
 *
 * @param {object} params - Params for query
 * @returns - Returns a object
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find a Builder by ID
 *
 * @param {string} id - Builder ID
 * @returns - Returns a object
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
 *  Get all Buildings
 *
 * @param {string} id - Builder ID
 * @returns - Returns a object
 */
export const getAllBuildingsById = async id => {
  return dao.getAllBuildingsById(id)
}

/**
 * Find a Builder by User ID
 *
 * @param {string} id - User ID
 * @returns - Returns a object
 */
export const getByUserId = async id => {
  const builder = await dao.getByUserId(id)

  if (builder) {
    builder.phones = await phone.getByBuilderId(builder.id)
    builder.partners = await partner.getByBuilderId(builder.id)
    builder.buildings = await building.getByBuilderId(builder.id)
  }

  return builder
}

/**
 * Saves a Builder
 *
 * @param {object} data - Builder data
 * @returns - Returns a object
 */
export const create = async data => {
  if (!data.builder || data.builder.length === 0) throw Error('Informe seus dados')
  if (!data.phones || data.phones.length === 0) throw Error('Informe pelo menos 1 telefone')

  const builder = await dao.create({
    id: data.builder.id,
    id_user: data.builder.id_user,
    cnpj: data.builder.cnpj,
    company_name: data.builder.company_name,
    company_fancy_name: data.builder.company_fancy_name,
    address_street: data.builder.address_street,
    address_number: data.builder.address_number,
    address_neighborhood: data.builder.address_neighborhood,
    address_city: data.builder.address_city,
    address_state: data.builder.address_state,
    address_country: data.builder.address_country,
    address_cep: data.builder.address_cep,
    logo_url: data.builder.logo_url
  })

  await phone.create(builder.id, data.phones)

  if (data.partners && data.partners.length !== 0) {
    await partner.create(builder.id, data.partners)
  }

  return builder
}

/**
 * Updates an Builder
 *
 * @param {object} data - Builder data
 * @returns - Returns a object
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
 * @param {string} id - Builder ID
 * @returns - Returns a object
 */
export const remove = id => {
  return dao.remove(id)
}
