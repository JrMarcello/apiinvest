import { logger } from '@common/utils'
import constants from '@common/constants'
import * as repository from './repository'

/**
 * @api {get} /builder Get all
 * @apiName GetBuilders
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      [
 *
 *      ]
 *   }
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
 * @api {get} /builder/:id Get (By ID)
 * @apiName GetBuilder
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Builder ID
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": eb76cd10-367b-447d-b238-fa8e9eef2a1f
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *
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
export const getById = async (request, response) => {
  try {
    response.json(await repository.getById(request.params.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

/**
 * @api {get} /builder/user/:id Get (By User ID)
 * @apiName GetBuilderByUserId
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID User ID
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": eb76cd10-367b-447d-b238-fa8e9eef2a1f
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *
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
export const getByUserId = async (request, response) => {
  try {
    response.json(await repository.getByUserId(request.params.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

/**
 * @api {post} /builder Create
 * @apiName CreateBuilder
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {string} params Builder params em breve aqui
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Construtora criada com sucesso",
 *      "builder": [{}]
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
    const builder = await repository.create(request.body)

    response.json(Object.assign(constants.builder.success.CREATED, { builder }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.builder.error.NOT_CREATED)
  }
}

/**
 * @api {put} /builder Update
 * @apiName UpdateBuilder
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {string} params Builder params em breve
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Construtora atualizada com sucesso",
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

    response.json(constants.builder.success.UPDATED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.builder.error.NOT_UPDATED)
  }
}

/**
 * @api {delete} /builder/:id Delete
 * @apiName DeleteBuilder
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": eb76cd10-367b-447d-b238-fa8e9eef2a1f
 *   }
 *
 * @apiParam {uuid} ID Builder ID
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Construtora deletada com sucesso"
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
export const remove = async (request, response) => {
  try {
    await repository.remove(request.params.id)

    response.json(constants.builder.success.REMOVED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.builder.error.NOT_REMOVED)
  }
}
