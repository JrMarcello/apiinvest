import { logger } from '@common/utils'
import constants from '@common/constants'
import * as repository from './repository'

/**
 * @api {get} /investor/:id/phone Get Phone (By Investor ID)
 * @apiName GetInvestorPhone
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Investor ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *      "id": 1,
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
export const getByInvestorId = async (request, response) => {
  try {
    response.json(await repository.getByInvestorId(request.params.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

/**
 * @api {post} /investor/phone Create Phone
 * @apiName CreateInvestorPhone
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id_investor Investor ID
 * @apiParam {array} phones Phones numbers
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id_investor": "eb76cd10-367b-447d-b238-fa8e9eef2a1f",
 *      "phones": ["83988317864"]
 *   }
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
    const phones = await repository.create(request.body.id_investor, request.body.phones)

    response.json(Object.assign(constants.investor_phone.success.CREATED, { phones }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investor_phone.error.NOT_CREATED)
  }
}

/**
 * @api {delete} /investor/phone/:id Delete Phone
 * @apiName DeleteInvestorPhone
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Investor Phone ID
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
 *        "location": "body"
 *      }]
 *   }
 */
export const remove = async (request, response) => {
  try {
    await repository.remove(request.params.id)

    response.json(constants.investor_phone.success.REMOVED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investor_phone.error.NOT_REMOVED)
  }
}
