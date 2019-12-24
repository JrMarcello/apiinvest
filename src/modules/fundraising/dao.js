import db from '../../core/database'
import { generateUUID } from '../../common/utils'
import * as investmentDao from '../investment/dao'

const table = 'fundraising'

/**
 *  Find all Fundraising
 *
 * @param {object} params - Params for query
 * @returns - Returns a object
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
 * @param {string} id - Fundraising ID
 * @returns - Returns a object
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
 *  Get amount raised
 *
 * @param {string} id - Fundraising ID
 * @returns - Returns a object
 */
export const getAmountRaised = async id => {
  return { amount: (await investmentDao.getAmountByFundraisingId(id)).sum || 0 }
}

/**
 *  Get Fundraising's investors
 *
 * @param {string} id - Fundraising ID
 * @returns - Returns a object
 */
export const getInvestorsByFundraisingId = id => {
  return investmentDao.getInvestorsByFundraisingId(id)
}

/**
 * Find Fundraisings by Building ID
 *
 * @param {string} id - Building ID
 * @returns - Returns a object
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
 * Create an Fundraising
 *
 * @param {object} data - Fundraising data
 * @returns - Returns a object
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
 * @param {object} data - Fundraising data
 * @returns - Returns a object
 */
export const update = data => {
  return db
    .update(table)
    .set(data)
    .where('id', data.id)
    .run()
}

/**
 * Cancel an Fundraising
 *
 * @param {string} id - Fundraising ID
 * @returns - Returns data
 */
export const remove = id => {
  return db
    .update(table)
    .set('active', false)
    .where('id', id)
    .run()
}
