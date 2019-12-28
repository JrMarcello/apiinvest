import { logger } from '../../common/utils'
import constants from '../../common/constants'
import * as repository from './repository'

/**
 * @api {get} /builder/:idBuilder/phones Get Phone (By Builder ID)
 * @apiName GetBuilderPhone
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} Builder ID Builder ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *      "id": 123,
 *      "id_builder": "eb76cd10-367b-447d-b238-fa8e9eef2a1f",
 *      "number": "83988317864"
 *   }]
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
    response.json(await repository.getByBuilderId(request.user.id_profile === 3 ? request.params.idBuilder : request.user.builder.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.builder.phones.error.NOT_FOUND)
  }
}

/**
 * @api {post} /builder/:idBuilder/phones Create Phone
 * @apiName CreateBuilderPhone
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} idBuilder Builder ID
 * @apiParam {array} phones Phones numbers
 *
 * @apiParamExample {json} Request-Example:
 *   { "phones": [{ "83988317864" }] }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Telefone criado com sucesso",
 *      "phone": [{
 *        "id": "123",
 *        "id_builder": "eb76cd10-367b-447d-b238-fa8e9eef2a1f",
 *        "number": "83988317864"
 *      }]
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
    const phones = await repository.create(
      request.user.id_profile === 3 ? request.params.idBuilder : request.user.builder.id,
      request.body.phones
    )

    response.json(Object.assign(constants.builder.phones.success.CREATE, { phones }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.builder.phones.error.CREATE)
  }
}

/**
 * @api {delete} /builder/:idBuilder/phones Delete Phones
 * @apiName DeleteBuilderPhone
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} idBuilder Builder ID
 *
 * @apiParamExample {json} Request-Example:
 *   { "ids": [1, 2] }
 *
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
 *        "location": "params"
 *      }]
 *   }
 */
export const remove = async (request, response) => {
  try {
    await repository.remove(request.user.id_profile === 3 ? request.params.idBuilder : request.user.builder.id, request.body.ids)

    response.json(constants.builder.phones.success.REMOVE)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.builder.phones.error.REMOVE)
  }
}
