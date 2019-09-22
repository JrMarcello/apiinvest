import { logger } from '@common/utils'
import constants from '@common/constants'
import * as repository from './repository'

/**
 * @api {get} /builder/:id/phone Get (By Builder ID)
 * @apiName GetBuilderPhone
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
export const getByBuilderId = async (request, response) => {
  try {
    response.json(await repository.getByBuilderId(request.params.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

/**
 * @api {post} /builder/phone Create
 * @apiName CreateBuilderPhone
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {string} params Builder Phone params em breve aqui
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
 *      "message": "Telefone criado com sucesso",
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
 *        "param": "numero",
 *        "location": "body"
 *      }]
 *   }
 */
export const create = async (request, response) => {
  try {
    const phones = await repository.create(request.body.id_builder, request.body.phones)

    response.json(Object.assign(constants.builder_phone.success.CREATED, { phones }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.builder_phone.error.NOT_CREATED)
  }
}

/**
 * @api {delete} /builder/phone/:id Delete
 * @apiName DeleteBuilderPhone
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": eb76cd10-367b-447d-b238-fa8e9eef2a1f
 *   }
 *
 * @apiParam {uuid} ID Builder Phone ID
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Telefone deletado com sucesso"
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

    response.json(constants.builder_phone.success.REMOVED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.builder_phone.error.NOT_REMOVED)
  }
}
