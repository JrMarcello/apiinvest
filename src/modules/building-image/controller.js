import { logger } from '@common/utils'
import constants from '@common/constants'
import * as repository from './repository'

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

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const create = async (request, response) => {
  try {
    const images = await repository.create({ id_building: request.body.id_building, files: request.files })

    response.json(Object.assign(constants.building_image.success.CREATED, { images }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.building_image.error.NOT_CREATED)
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

    response.json(constants.building_image.success.REMOVED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.building_image.error.NOT_REMOVED)
  }
}
