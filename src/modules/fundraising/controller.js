import { logger } from '../../common/utils'
import constants from '../../common/constants'
import * as repository from './repository'

/**
 * @api {get} /fundraising Get all
 * @apiName GetFundraisings
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "cd99df55-e99b-4db1-86cd-143430f1a19a",
 *       "id_building": "e69738af-8619-4335-99b9-153da3f723c6",
 *       "id_custodian": null,
 *       "amount": "2536216.00",
 *       "initial_date": "2019-09-24T03:00:00.000Z",
 *       "final_date": "2019-09-30T03:00:00.000Z",
 *       "finished": false,
 *       "created_date": "2019-09-24T19:08:56.438Z",
 *       "active": true
 *   }]
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *     {
 *        "code": 9999,
 *        "message": "Requisição inválida",
 *        "errors": [{}]
 *     }
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
 * @api {get} /fundraising/:id Get (By ID)
 * @apiName GetFundraising
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Fundraising ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "id": "cd99df55-e99b-4db1-86cd-143430f1a19a",
 *      "id_building": "e69738af-8619-4335-99b9-153da3f723c6",
 *      "id_custodian": null,
 *      "amount": "2536216.00",
 *      "initial_date": "2019-09-24T03:00:00.000Z",
 *      "final_date": "2019-09-30T03:00:00.000Z",
 *      "finished": false,
 *      "created_date": "2019-09-24T19:08:56.438Z",
 *      "active": true
 *   }
 *
 *  @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Dados da requisição inválidos",
 *      "errors": [{
 *        "msg": "Invalid value",
 *        "param": "id",
 *        "location": "body"
 *      }]
 *   }
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
 * @api {get} /fundraising Get (By Building ID)
 * @apiName GetFundraisingsByBuilding
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "cd99df55-e99b-4db1-86cd-143430f1a19a",
 *       "id_building": "e69738af-8619-4335-99b9-153da3f723c6",
 *       "id_custodian": null,
 *       "amount": "2536216.00",
 *       "initial_date": "2019-09-24T03:00:00.000Z",
 *       "final_date": "2019-09-30T03:00:00.000Z",
 *       "finished": false,
 *       "created_date": "2019-09-24T19:08:56.438Z",
 *       "active": true
 *   }]
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *     {
 *        "code": 9999,
 *        "message": "Requisição inválida",
 *        "errors": [{}]
 *     }
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
 * @api {post} /fundraising Create
 * @apiName CreateFundraising
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiParam {string} params Fundraising params em breve aqui
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id_building": "8dff5f89-dbd1-4db1-b3ac-ee4d3904429a",
 *      "id_custodian": "647ac188-62c8-4618-8a0a-be14174aac49",
 *      "amount": "1000.00",
 *      "initial_date": "2019-08-25",
 *      "final_date": "2020-02-25"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": 6000,
 *      "message": "Captação criada com sucesso",
 *      "fundraising": [
 *        {
 *           "id": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *           "id_building": "8dff5f89-dbd1-4db1-b3ac-ee4d3904429a",
 *           "id_custodian": "647ac188-62c8-4618-8a0a-be14174aac49",
 *           "amount": "1000.00",
 *           "initial_date": "2019-08-25T03:00:00.000Z",
 *           "final_date": "2020-02-25T03:00:00.000Z",
 *           "finished": false,
 *           "created_date": "2019-09-25T00:32:04.442Z",
 *           "active": true
 *        }
 *      ]
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Dados da requisição inválidos",
 *      "errors": [{
 *        "msg": "Invalid value",
 *        "param": "cnpj",
 *        "location": "body"
 *      }]
 *   }
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
 * @api {put} /fundraising Update
 * @apiName UpdateFundraising
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiParam {string} params Fundraising params em breve
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *      "amount": "1000.00",
 *      "initial_date": "2019-08-25",
 *      "final_date": "2020-02-25"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Captação atualizada com sucesso",
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Dados da requisição inválidos",
 *      "errors": [{
 *        "msg": "Invalid value",
 *        "param": "cnpj",
 *        "location": "body"
 *      }]
 *   }
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
 * @api {put} /fundraising/:id/finish Finish
 * @apiName FinishFundraising
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Captação encerrada com sucesso"
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Dados da requisição inválidos",
 *      "errors": [{
 *        "msg": "Invalid value",
 *        "param": "id",
 *        "location": "body"
 *      }]
 *   }
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
 * @api {put} /fundraising/:id/cancel Cancel
 * @apiName CancelFundraising
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Captação cancelada com sucesso"
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Dados da requisição inválidos",
 *      "errors": [{
 *        "msg": "Invalid value",
 *        "param": "id",
 *        "location": "body"
 *      }]
 *   }
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
