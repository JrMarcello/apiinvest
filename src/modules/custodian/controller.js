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
 *   [{
 *       "id": "647ac188-62c8-4618-8a0a-be14174aac49",
 *       "cnpj": "34096667000151",
 *       "company_name": "Custodiadora Default SA",
 *       "company_fancy_name": "Custodiadora Default",
 *       "phone": "8333334444",
 *       "create_date": "2019-09-24T04:29:51.726Z",
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
 * @api {get} /custodian/:id Get (By ID)
 * @apiName GetCustodian
 * @apiGroup Custodian
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Custodian ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "id": "647ac188-62c8-4618-8a0a-be14174aac49",
 *      "cnpj": "34096667000151",
 *      "company_name": "Custodiadora Default SA",
 *      "company_fancy_name": "Custodiadora Default",
 *      "phone": "8333334444",
 *      "create_date": "2019-09-24T04:29:51.726Z",
 *      "active": true
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
 * @apiParam {string} cnpj Custodian cnpj
 * @apiParam {string} company_name Custodian company name
 * @apiParam {string} company_fancy_name Custodian company fancy name
 * @apiParam {string} phone Custodian phone
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "cnpj": "34096667000151",
 *      "company_name": "Custodiadora Default SA",
 *      "company_fancy_name": "Custodiadora Default",
 *      "phone": "8333334444"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Custodiadora criada com sucesso",
 *      "builder": [{
 *        "id": "647ac188-62c8-4618-8a0a-be14174aac49",
 *        "cnpj": "34096667000151",
 *        "company_name": "Custodiadora Default SA",
 *        "company_fancy_name": "Custodiadora Default",
 *        "phone": "8333334444",
 *        "create_date": "2019-09-24T04:29:51.726Z",
 *        "active": true
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
 * @apiParam {uuid} ID Custodian ID
 * @apiParam {string} cnpj Custodian cnpj
 * @apiParam {string} company_name Custodian company name
 * @apiParam {string} company_fancy_name Custodian company fancy name
 * @apiParam {string} phone Custodian phone
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": "647ac188-62c8-4618-8a0a-be14174aac49",
 *      "cnpj": "34096667000151",
 *      "company_name": "Custodiadora Default SA",
 *      "company_fancy_name": "Custodiadora Default",
 *      "phone": "8333334444"
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
 * @apiParam {uuid} ID Custodian ID
 *
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
