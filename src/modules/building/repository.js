import * as image from '@modules/building-image/repository'
import * as fundraising from '@modules/fundraising/repository'
import * as dao from './dao'

/**
 *  Get all Buildings
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find a Building by ID
 *
 * @param {Interger} id - Building ID
 * @returns {Promisse} - Returns a Promisse
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
 * @param {Interger} id - User ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByBuilderId = async id => {
  const building = await dao.getByBuilderId(id)

  if (building) {
    building.images = await image.getByBuildingId(building.id)
    building.fundraisings = await fundraising.getByBuildingId(building.id)
  }

  return building
}

/**
 * Saves a Building
 *
 * @param {Object} data - Building data to be saved
 * @returns {Promisse} - Returns a Promisse
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
 * @param {Object} data - Building data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  if (!data || data.length === 0) throw Error('Dados inválidos')

  return dao.update({
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
 * Remove an Building
 *
 * @param {Object} id - Building id
 * @returns {Function} - Returns a Promisse
 */
export const remove = id => {
  return dao.remove(id)
}
