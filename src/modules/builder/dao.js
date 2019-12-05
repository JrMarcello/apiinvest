import db from '../../core/database'
import { generateUUID } from '../../common/utils'
import { getByBuilderId } from '../building/dao'

const table = 'builder'

/**
 *  Find all Builders
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = () => {
  return db
    .select()
    .from(table)
    .where('active', true)
    .run()
}

/**
 * Find a Builder by ID
 *
 * @param {Interger} id - Builder ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = async id => {
  return (
    await db
      .select()
      .from(table)
      .where('id', id)
      .and('active', true)
      .run()
  )[0]
}

/**
 * Find a Builder by User ID
 *
 * @param {Interger} id - User ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByUserId = async id => {
  return (
    await db
      .select()
      .from(table)
      .where('id_user', id)
      .and('active', true)
      .run()
  )[0]
}

/**
 *  Find all Buildings
 *
 * @param {Object} id - Builder ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getAllBuildingsById = id => {
  return getByBuilderId(id)
}

/**
 * Create an Builder
 *
 * @param {Object} data - Builder data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  data.id = await generateUUID()

  return (
    await db
      .insert(data)
      .into(table)
      .returning('*')
      .run()
  )[0]
}

/**
 * Update an Builder
 *
 * @param {Object} data - Builder data to be updated
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
 * Remove an Builder
 *
 * @param {Object} id - Builder id to be removed
 * @returns {Object} - Returns data
 */
export const remove = id => {
  return db
    .update(table)
    .set('active', false)
    .where('id', id)
    .run()
}
