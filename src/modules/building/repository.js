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
export const getById = id => {
  return dao.getById(id)
}

/**
 * Find Buildings by Builder ID
 *
 * @param {Interger} id - User ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByBuilderId = id => {
  return dao.getByBuilderId(id)
}

/**
 * Saves a Building
 *
 * @param {Object} data - Building data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = data => {
  return dao.create(data)
}

/**
 * Updates an Building
 *
 * @param {Object} data - Building data to be updated
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
 * Remove an Building
 *
 * @param {Object} id - Building id
 * @returns {Function} - Returns the callback function
 */
export const remove = id => {
  return dao.remove(id)
}
