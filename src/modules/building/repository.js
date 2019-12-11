import * as image from '../building-image/repository'
import * as fundraising from '../fundraising/repository'
import * as dao from './dao'

/**
 *  Get all Buildings
 *
 * @param {object} params - Params for query
 * @returns - Returns a object
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 *  Get all avaliables to investments Buildings
 *
 * @param {object} params - Params for query
 * @returns - Returns a object
 */
export const getAllAvaliables = async params => {
  return dao.getAllAvaliables(params)
}

/**
 * Find a Building by ID
 *
 * @param {string} id - Building ID
 * @returns - Returns a object
 */
export const getById = async id => {
  const building = await dao.getById(id)

  if (building) {
    building.images = await image.getByBuildingId(building.id)
    building.fundraisings = await fundraising.getByBuildingId(building.id)
  }

  return building
}

/**
 * Find Buildings by Builder ID
 *
 * @param {string} id - User ID
 * @returns - Returns a object
 */
export const getByBuilderId = id => {
  return dao.getByBuilderId(id)
}

/**
 * Saves a Building
 *
 * @param {object} data - Building data
 * @returns - Returns a object
 */
export const create = data => {
  return dao.create({
    id: data.id,
    id_builder: data.id_builder,
    cnpj: data.cnpj,
    registration: data.registration,
    name: data.name,
    description: data.description,
    address_street: data.address_street,
    address_number: data.address_number,
    address_neighborhood: data.address_neighborhood,
    address_city: data.address_city,
    address_state: data.address_state,
    address_country: data.address_country,
    address_cep: data.address_cep,
    vgv: data.vgv,
    initial_date: data.initial_date,
    final_date: data.final_date
  })
}

/**
 * Updates an Building
 *
 * @param {object} data - Building data
 * @returns - Returns a object
 */
export const update = data => {
  if (!data || data.length === 0) throw Error('Dados inválidos')

  return dao.update({
    id: data.id,
    cnpj: data.cnpj,
    registration: data.registration,
    name: data.name,
    description: data.description,
    address_street: data.address_street,
    address_number: data.address_number,
    address_neighborhood: data.address_neighborhood,
    address_city: data.address_city,
    address_state: data.address_state,
    address_country: data.address_country,
    address_cep: data.address_cep,
    vgv: data.vgv,
    initial_date: data.initial_date,
    final_date: data.final_date
  })
}

/**
 * Remove an Building
 *
 * @param {string} id - Building ID
 * @returns - Returns a object
 */
export const remove = id => {
  return dao.remove(id)
}
