import { logger } from '../../common/utils'
import constants from '../../common/constants'
import * as repository from './repository'

/**
 * @api {get} /investment Get all
 * @apiName GetInvestments
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "f77880cf-4864-4a27-b15c-34fae2566a38",
 *       "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *       "id_fundraising": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *       "amount": "1000.00",
 *       "percentage": "0.05",
 *       "date": "2019-09-25T03:00:00.000Z",
 *       "ted_proof_url": null,
 *       "confirmed": false,
 *       "created_date": "2019-09-25T01:59:29.077Z",
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

    response.status(500).json(constants.investment.error.NOT_FOUNDS)
  }
}

/**
 * @api {get} /investment/me Get all by me
 * @apiName GetInvestmentsMe
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "f77880cf-4864-4a27-b15c-34fae2566a38",
 *       "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *       "id_fundraising": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *       "amount": "1000.00",
 *       "percentage": "0.05",
 *       "date": "2019-09-25T03:00:00.000Z",
 *       "ted_proof_url": null,
 *       "confirmed": false,
 *       "created_date": "2019-09-25T01:59:29.077Z",
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
export const getAllMe = async (request, response) => {
  try {
    response.json(await repository.getByInvestorId(request.user.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investment.error.NOT_FOUNDS)
  }
}

/**
 * @api {get} /investment/:id Get (By ID)
 * @apiName GetInvestment
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Investment ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "id": "f77880cf-4864-4a27-b15c-34fae2566a38",
 *      "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *      "id_fundraising": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *      "amount": "1000.00",
 *      "percentage": "0.05",
 *      "date": "2019-09-25T03:00:00.000Z",
 *      "ted_proof_url": null,
 *      "confirmed": false,
 *      "created_date": "2019-09-25T01:59:29.077Z",
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

    response.status(500).json(constants.investment.error.NOT_FOUND)
  }
}

/**
 * @api {get} /investment/me/:id Get (By ID)
 * @apiName GetInvestmentMe
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Investment ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "id": "f77880cf-4864-4a27-b15c-34fae2566a38",
 *      "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *      "id_fundraising": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *      "amount": "1000.00",
 *      "percentage": "0.05",
 *      "date": "2019-09-25T03:00:00.000Z",
 *      "ted_proof_url": null,
 *      "confirmed": false,
 *      "created_date": "2019-09-25T01:59:29.077Z",
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
export const getByIdMe = async (request, response) => {
  try {
    response.json(await repository.getByIdMe(request.user.id, request.params.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investment.error.NOT_FOUND)
  }
}

/**
 * @api {get} /investment/investor/:id Get (By Investor ID)
 * @apiName GetInvestmentsByInvestorId
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Investor ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "f77880cf-4864-4a27-b15c-34fae2566a38",
 *       "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *       "id_fundraising": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *       "amount": "1000.00",
 *       "percentage": "0.05",
 *       "date": "2019-09-25T03:00:00.000Z",
 *       "ted_proof_url": null,
 *       "confirmed": false,
 *       "created_date": "2019-09-25T01:59:29.077Z",
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
export const getByInvestorId = async (request, response) => {
  try {
    response.json(await repository.getByInvestorId(request.params.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investment.error.NOT_FOUNDS)
  }
}

/**
 * @api {get} /investment/fundraising/:id Get (By Fundraising ID)
 * @apiName GetInvestmentsByFundraisingId
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Fundraising ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "f77880cf-4864-4a27-b15c-34fae2566a38",
 *       "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *       "id_fundraising": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *       "amount": "1000.00",
 *       "percentage": "0.05",
 *       "date": "2019-09-25T03:00:00.000Z",
 *       "ted_proof_url": null,
 *       "confirmed": false,
 *       "created_date": "2019-09-25T01:59:29.077Z",
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
export const getByFundraisingId = async (request, response) => {
  try {
    response.json(await repository.getByFundraisingId(request.params.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

/**
 * @api {get} /investment/pending Get all pedings
 * @apiName GetInvestmentsPendings
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "f77880cf-4864-4a27-b15c-34fae2566a38",
 *       "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *       "id_fundraising": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *       "amount": "1000.00",
 *       "percentage": "0.05",
 *       "date": "2019-09-25T03:00:00.000Z",
 *       "ted_proof_url": null,
 *       "confirmed": false,
 *       "created_date": "2019-09-25T01:59:29.077Z",
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
export const getPendings = async (request, response) => {
  try {
    response.json(await repository.getPendings(request.params))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investment.error.NOT_FOUNDS)
  }
}

/**
 * @api {post} /investment Create
 * @apiName CreateInvestment
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParam {string} params Investment params em breve aqui
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *      "id_fundraising": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *      "amount": 1000,
 *      "percentage": 0.05,
 *      "date": "2019-09-25"
 *   }
 *
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": 4000,
 *      "message": "Investimento criado com sucesso",
 *      "investment": [{
 *           "id": "f77880cf-4864-4a27-b15c-34fae2566a38",
 *           "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *           "id_fundraising": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *           "amount": "1000.00",
 *           "percentage": "0.05",
 *           "date": "2019-09-25T03:00:00.000Z",
 *           "ted_proof_url": null,
 *           "confirmed": false,
 *           "created_date": "2019-09-25T01:59:29.077Z",
 *           "active": true
 *      }]
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 4502,
 *      "message": "Erro ao tentar criar a investimento"
 *   }
 */
export const create = async (request, response) => {
  try {
    const investment = await repository.create(request.body)

    response.json(Object.assign(constants.investment.success.CREATE, { investment }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investment.error.CREATE)
  }
}

/**
 * @api {put} /investment/ted TED Confirmation
 * @apiName TEDConfirmation
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Investment ID
 * @apiParam {file} file Image
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": "647ac188-62c8-4618-8a0a-be14174aac49",
 *      "file": [buffer]
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "TED enviada com sucesso",
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
export const tedConfirmation = async (request, response) => {
  try {
    await repository.tedConfirmation(Object.assign(request.body, { file: request.file }))

    response.json(constants.investment.success.TED_CONFIRMATION)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investment.error.TED_CONFIRMATION)
  }
}

/**
 * @api {put} /investment/confirm Investment Confirmation
 * @apiName TEDConfirmation
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParam {array} confirmations Investment IDs
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "confirmations": ["791c50c6-f1eb-4efe-ba41-315d4e3c5e83", "a788426a-258c-49a5-a905-abec5bba222a"]
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Investimentos confirmados com sucesso",
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
export const confirm = async (request, response) => {
  try {
    await repository.confirm(request.body.confirmations)

    response.json(constants.investment.success.CONFIRMATION)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investment.error.CONFIRMATION)
  }
}

/**
 * @api {put} /investment/:id/cancel Cancel
 * @apiName CancelInvestment
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Investimento cancelado com sucesso"
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

    response.json(constants.investment.success.CANCEL)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investment.error.CANCEL)
  }
}
