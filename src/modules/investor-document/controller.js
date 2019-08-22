import { logger } from '@common/utils'
import constants from '@common/constants'
import * as repository from './repository'

// /**
//  * @param {Object} request - HTTP request
//  * @param {Object} response - HTTP response
//  * @returns {Object} HTTP response with status code and data
//  */
// export const getAll = async (request, response) => {
//   try {
//     response.json(await repository.getAll(request.params))
//   } catch (err) {
//     logger().error(err)

//     response.status(500).json(err.message)
//   }
// }

// /**
//  * @param {Object} request - HTTP request
//  * @param {Object} response - HTTP response
//  * @returns {Object} HTTP response with status code and data
//  */
// export const getById = async (request, response) => {
//   try {
//     response.json(await repository.getById(request.params.id))
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
    const documents = await repository.create(request.body.id_investor, request.files)

    response.json(Object.assign(constants.investor_document.success.CREATED, { documents }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investor_document.error.NOT_CREATED)
  }
}

// /**
//  * @param {Object} request - HTTP request
//  * @param {Object} response - HTTP response
//  * @returns {Object} HTTP response with status code and data
//  */
// export const update = async (request, response) => {
//   try {
//     await repository.update(request.body)

//     response.json(constants.investor_bank_account.success.UPDATED)
//   } catch (err) {
//     logger().error(err)

//     response.status(500).json(constants.investor_bank_account.error.NOT_UPDATED)
//   }
// }

// /**
//  * @param {Object} request - HTTP request
//  * @param {Object} response - HTTP response
//  * @returns {Object} HTTP response with status code and data
//  */
// export const remove = async (request, response) => {
//   try {
//     await repository.remove(request.params.id)

//     response.json(constants.investor_bank_account.success.REMOVED)
//   } catch (err) {
//     logger().error(err)

//     response.status(500).json(constants.investor_bank_account.error.NOT_REMOVED)
//   }
// }
