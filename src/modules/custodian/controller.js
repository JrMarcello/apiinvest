import { logger } from '@common/utils'
import constants from '@common/constants'
import * as repository from './repository'

/**
 * @api {get} /custodian Get all
 * @apiName GetCustodians
 * @apiGroup Custodian
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
 * @api {get} /custodian/:id Get (By ID)
 * @apiName GetCustodian
 * @apiGroup Custodian
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Custodian ID
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
 * @api {post} /custodian Create
 * @apiName CreateCustodian
 * @apiGroup Custodian
 * @apiVersion 1.0.0
 *
 * @apiParam {string} params Custodian params em breve aqui
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
 *      "message": "Custodiadora criada com sucesso",
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
    const custodian = await repository.create(request.body)

    response.json(Object.assign(constants.custodian.success.CREATED, { custodian }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.custodian.error.NOT_CREATED)
  }
}

/**
 * @api {put} /custodian Update
 * @apiName UpdateCustodian
 * @apiGroup Custodian
 * @apiVersion 1.0.0
 *
 * @apiParam {string} params Custodian params em breve
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
 *      "message": "Custodiadora atualizada com sucesso",
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

    response.json(constants.custodian.success.UPDATED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.custodian.error.NOT_UPDATED)
  }
}

/**
 * @api {delete} /custodian/:id Delete
 * @apiName DeleteCustodian
 * @apiGroup Custodian
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": eb76cd10-367b-447d-b238-fa8e9eef2a1f
 *   }
 *
 * @apiParam {uuid} ID Custodian ID
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Custodiadora deletada com sucesso"
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

    response.json(constants.custodian.success.REMOVED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.custodian.error.NOT_REMOVED)
  }
}
