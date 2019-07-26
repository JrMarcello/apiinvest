import * as dao from './dao'

/**
 *  Get all Building from database.
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
 * @param {Interger} id - Builder ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByBuilderId = id => {
  return dao.getByBuilderId(id)
}

/**
 * Find Buildings by Funding ID
 *
 * @param {Interger} id - Funding ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByFundingId = id => {
  return dao.getByFundingId(id)
}

/**
 * Saves a Building in database
 *
 * @param {Object} data - Building data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = data => {
  return dao.create(data)
}

/**
 * Updates an Building, given an id
 *
 * @param {Object} data - Building data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  const updateble = {
    id: data.id,
    spe: data.spe,
    matricula: data.matricula,
    nome: data.nome,
    descricao: data.descricao,
    endereco: data.endereco,
    valor: data.valor,
    data_inicio: data.data_inicio,
    data_fim: data.data_fim
  }

  return dao.update(updateble)
}

/**
 * Remove a Building
 *
 * @param {Object} id - Building id
 * @returns {Function} - Returns the callback function
 */
export const remove = id => {
  return dao.remove(id)
}
