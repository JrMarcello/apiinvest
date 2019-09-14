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

    response.status(500).json(err.message)
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

    response.status(500).json(err)
  }
}

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const getByBuildingId = async (request, response) => {
  try {
    response.json(await repository.getByBuildingId(request.params.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

// /**
//  * @param {Object} request - HTTP request
//  * @param {Object} response - HTTP response
//  * @returns {Object} HTTP response with status code and data
//  */
// export const getByCustodianId = async (request, response) => {
//   try {
//     response.json(await repository.getByCustodianId(request.params.id))
//   } catch (err) {
//     logger().error(err)

//     response.status(500).json(err)
//   }
// }

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const create = async (request, response) => {
  try {
    const fundraising = await repository.create(request.body)

    response.json(Object.assign(constants.fundraising.success.CREATED, { fundraising }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.fundraising.error.NOT_CREATED)
  }
}

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const update = async (request, response) => {
  try {
    await repository.update(request.body)

    response.json(constants.fundraising.success.UPDATED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.fundraising.error.NOT_UPDATED)
  }
}

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const finish = async (request, response) => {
  try {
    await repository.finish(request.params.id)

    response.json(constants.fundraising.success.FINISHED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.fundraising.error.FINISHED)
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

    response.json(constants.fundraising.success.REMOVED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.fundraising.error.NOT_REMOVED)
  }
}
