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
export const create = async (request, response) => {
  try {
    const custodian = await repository.create(request.body)

    response.json(Object.assign(constants.custodian.success.CREATED, { custodian }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.custodian.error.NOT_CREATED)
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

    response.json(constants.custodian.success.UPDATED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.custodian.error.NOT_UPDATED)
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

    response.json(constants.custodian.success.REMOVED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.custodian.error.NOT_REMOVED)
  }
}