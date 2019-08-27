import { logger } from '@common/utils'
import constants from '@common/constants'
import * as repository from './repository'

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const getByInvestorId = async (request, response) => {
  try {
    response.json(await repository.getByInvestorId(request.params.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const create = async (request, response) => {
  try {
    const accounts = await repository.create(request.body.id_investor, request.body.accounts)

    response.json(Object.assign(constants.investor_bank_account.success.CREATED, { accounts }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investor_bank_account.error.NOT_CREATED)
  }
}

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const remove = async (request, response) => {
  try {
    await repository.remove(request.params.id)

    response.json(constants.investor_bank_account.success.REMOVED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investor_bank_account.error.NOT_REMOVED)
  }
}
