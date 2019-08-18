import { logger } from '@common/utils'
import constants from '@common/constants'
import * as repository from './repository'

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const getAll = async (request, response) => {
  try {
    response.json(await repository.getAll(request.params))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investment.error.NOT_FOUNDS)
  }
}

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const getById = async (request, response) => {
  try {
    response.json(await repository.getById(request.params.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investment.error.NOT_FOUND)
  }
}

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

    response.status(500).json(constants.investment.error.NOT_FOUNDS)
  }
}

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const getByFundraisingId = async (request, response) => {
  try {
    response.json(await repository.getByFundraisingId(request.params.id))
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
    const investment = await repository.create(request.body)

    response.json(Object.assign(constants.investment.success.CREATE, { investment }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investment.error.CREATE)
  }
}

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const TEDProof = async (request, response) => {
  try {
    await repository.TEDProof(request.body)

    response.json(constants.investment.success.TED_PROOF)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investment.error.TED_PROOF)
  }
}

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const cancel = async (request, response) => {
  try {
    await repository.cancel(request.params.id)

    response.json(constants.investment.success.CANCEL)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investment.error.CANCEL)
  }
}
