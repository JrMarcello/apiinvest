import db from '@core/database'
import { generateUUID } from '@common/utils'

const table = 'obra'

/**
 *  Find all Building
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = () => {
  return db
    .select()
    .from(table)
    .where('ativo', true)
    .run()
}

/**
 * Find a Building by ID
 *
 * @param {Interger} id - Building ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = id => {
  return db
    .select()
    .from(table)
    .where('id', id)
    .and('ativo', true)
    .run()
}

/**
 * Find Buildings by Investor ID
 *
 * @param {Interger} id - Investor ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByBuilderId = id => {
  return db
    .select()
    .from(table)
    .where('id_construtora', id)
    .and('ativo', true)
    .run()
}

/**
 * Find Buildings by Funding ID
 *
 * @param {Interger} id - Funding ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByFundingId = id => {
  return db
    .select()
    .from(table)
    .where('id_captacao', id)
    .and('ativo', true)
    .run()
}

/**
 * Create an Building
 *
 * @param {Object} data - Building data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  data.id = await generateUUID()

  return db
    .insert(data)
    .into(table)
    .returning('*')
    .run()
}

/**
 * Update an Building
 *
 * @param {Object} data - Building data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  return db
    .update(table)
    .set(data)
    .where('id', data.id)
    .run()
}

/**
 * Remove an Building
 *
 * @param {Object} id - Building id to be removed
 * @returns {Object} - Returns data
 */
export const remove = id => {
  return db
    .update(table)
    .set('ativo', false)
    .where('id', id)
    .run()
}
