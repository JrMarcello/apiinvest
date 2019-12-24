import * as dao from './dao'
import * as fundraisingDao from '../investment/dao'
import constants from '../../common/constants'

/**
 *  Get all Fundraisings
 *
 * @param {object} params - Params for query
 * @returns - Returns a object
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find a Fundraising by ID
 *
 * @param {string} id - Fundraising ID
 * @returns - Returns a object
 */
export const getById = id => {
  return dao.getById(id)
}

/**
 * Find Fundraisings by Building ID
 *
 * @param {string} id - Building ID
 * @returns - Returns a object
 */
export const getByBuildingId = id => {
  return dao.getByBuildingId(id)
}

/**
 * Search the amount raised by Fundraising ID
 *
 * @param {string} id - Fundraising ID
 * @returns - Returns a object
 */
export const getAmountRaised = id => {
  return dao.getAmountRaised(id)
}

/**
 * Get Fundraising's investors
 *
 * @param {string} id - Fundraising ID
 * @returns - Returns a object
 */
export const getInvestorsByFundraisingId = id => {
  return dao.getInvestorsByFundraisingId(id)
}

/**
 * Saves a Fundraising
 *
 * @param {object} data - Fundraising data
 * @returns - Returns a object
 */
export const create = data => {
  return dao.create({
    id_building: data.id_building,
    id_custodian: data.id_custodian,
    amount: data.amount,
    investment_min_value: data.investment_min_value,
    investment_percentage: data.investment_percentage,
    return_date: data.return_date,
    initial_date: data.initial_date,
    final_date: data.final_date
  })
}

/**
 * Updates an Fundraising
 *
 * @param {object} data - Fundraising data
 * @returns - Returns a object
 */
export const update = data => {
  return dao.update({
    id: data.id,
    amount: data.amount,
    investment_min_value: data.investment_min_value,
    investment_percentage: data.investment_percentage,
    return_date: data.return_date,
    initial_date: data.initial_date,
    final_date: data.final_date
  })
}

/**
 * Finish a Fundraising
 *
 * @param {object} data - Fundraising data
 * @returns - Returns a object
 */
export const finish = id => {
  return dao.update({
    id,
    finished: true
  })
}

/**
 * Cancel an Fundraising
 *
 * @param {string} id - Fundraising ID
 * @returns - Returns a object
 */
export const remove = async id => {
  if ((await fundraisingDao.getByFundraisingId(id)).length !== 0) throw Error(constants.fundraising.error.NOT_REMOVED_INVESTMENT)

  return dao.remove(id)
}
