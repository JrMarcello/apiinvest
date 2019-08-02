import db from '@core/database'
import { generateUUID } from '@common/utils'

const table = 'fundraising'

/**
 *  Find all Fundraising
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
 * Find a Fundraising by ID
 *
 * @param {Interger} id - Fundraising ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = id => {
  return db
    .select()
    .from(table)
    .where('id', id)
    .and('active', true)
    .run()
}

/**
 * Find Fundraisings by Building ID
 *
 * @param {Interger} id - Building ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByBuildingId = id => {
  return db
    .select()
    .from(table)
    .where('id_building', id)
    .and('active', true)
    .run()
}

/**
 * Find Fundraisings by Custodian ID
 *
 * @param {Interger} id - Custodian ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByCustodianId = id => {
  return db
    .select()
    .from(table)
    .where('id_custodian', id)
    .and('active', true)
    .run()
}

/**
 * Create an Fundraising
 *
 * @param {Object} data - Fundraising data to be saved
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
 * Update an Fundraising
 *
 * @param {Object} data - Fundraising data to be updated
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
 * Remove an Fundraising
 *
 * @param {Object} id - Fundraising id to be removed
 * @returns {Object} - Returns data
 */
export const remove = id => {
  return db
    .update(table)
    .set('active', false)
    .where('id', id)
    .run()
}
