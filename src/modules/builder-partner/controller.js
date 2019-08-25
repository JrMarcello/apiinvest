import { logger } from '@common/utils'
import constants from '@common/constants'
import * as repository from './repository'

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const getByBuilderId = async (request, response) => {
  try {
    response.json(await repository.getByBuilderId(request.params.id))
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
    const partners = await repository.create(request.body.id_builder, request.body.partners)

    response.json(Object.assign(constants.builder_partner.success.CREATED, { partners }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.builder_partner.error.NOT_CREATED)
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

    response.json(constants.builder_partner.success.REMOVED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.builder_partner.error.NOT_REMOVED)
  }
}
