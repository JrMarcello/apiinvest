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
 *       "amount_returned": "0",
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
    if (request.user.id_profile === 3) return response.json(await repository.getAll(request.params))

    return response.status(403).json({
      status: 'Acesso negado!',
      success: false,
      message: 'Você não está autorizado a acessar esse recurso'
    })
  } catch (err) {
    logger().error(err)

    return response.status(500).json(Object.assign(constants.investment.error.NOT_FOUNDS, { errors: err.message }))
  }
}

/**
 * @api {get} /investment/:id Get (By ID)
 * @apiName GetInvestment
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Investment ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "id": "5e891a4e-9195-412a-9f02-135f632c15d0",
 *      "id_investor": "a897eacd-2681-4e08-8062-c8f7e174bace",
 *      "id_fundraising": "54b07d12-e847-4158-9569-71fd1bf1da29",
 *      "amount": "1500.00",
 *      "amount_returned": null,
 *      "date": "2019-09-25T03:00:00.000Z",
 *      "ted_proof_url": null,
 *      "confirmed": false,
 *      "created_date": "2019-12-17T01:20:56.397Z",
 *      "active": true
 *   }
 
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
export const getById = async (request, response) => {
  try {
    response.json(await repository.getById(request.params.id, request.user.id_profile === 3 ? null : request.user.investor.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(Object.assign(constants.investment.error.NOT_FOUND, { errors: err.message }))
  }
}

/**
 * @api {get} /investment/investor/:id Get (By Investor ID)
 * @apiName GetInvestmentsByInvestorId
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Investor ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "5e891a4e-9195-412a-9f02-135f632c15d0",
 *       "id_investor": "a897eacd-2681-4e08-8062-c8f7e174bace",
 *       "id_fundraising": "54b07d12-e847-4158-9569-71fd1bf1da29",
 *       "amount": "1500.00",
 *       "amount_returned": null,
 *       "date": "2019-09-25T03:00:00.000Z",
 *       "ted_proof_url": null,
 *       "confirmed": false,
 *       "created_date": "2019-12-17T01:20:56.397Z",
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
    response.json(await repository.getByInvestorId(request.user.id_profile === 3 ? request.params.id : request.user.investor.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(Object.assign(constants.investment.error.NOT_FOUNDS, { errors: err.message }))
  }
}

/**
 * @api {get} /investment/fundraising/:id Get (By Fundraising ID)
 * @apiName GetInvestmentsByFundraisingId
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Fundraising ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "5e891a4e-9195-412a-9f02-135f632c15d0",
 *       "id_investor": "a897eacd-2681-4e08-8062-c8f7e174bace",
 *       "id_fundraising": "54b07d12-e847-4158-9569-71fd1bf1da29",
 *       "amount": "1500.00",
 *       "amount_returned": null,
 *      "date": "2019-09-25T03:00:00.000Z",
 *        "ted_proof_url": null,
 *       "confirmed": false,
 *       "created_date": "2019-12-17T01:20:56.397Z",
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
    if (request.user.id_profile === 3) return response.json(await repository.getByFundraisingId(request.params.id))

    return response.status(403).json({
      status: 'Acesso negado!',
      success: false,
      message: 'Você não está autorizado a acessar esse recurso'
    })
  } catch (err) {
    logger().error(err)

    return response.status(500).json(Object.assign(constants.investment.error.NOT_FOUNDS, { errors: err.message }))
  }
}

/**
 * @api {get} /investment/pendings Get all pedings
 * @apiName GetInvestmentsPendings
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "5e891a4e-9195-412a-9f02-135f632c15d0",
 *       "id_investor": "a897eacd-2681-4e08-8062-c8f7e174bace",
 *       "id_fundraising": "54b07d12-e847-4158-9569-71fd1bf1da29",
 *       "amount": "1500.00",
 *       "amount_returned": null,
 *       "date": "2019-09-25T03:00:00.000Z",
 *        "ted_proof_url": null,
 *       "confirmed": false,
 *       "created_date": "2019-12-17T01:20:56.397Z",
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
    if (request.user.id_profile === 3) return response.json(await repository.getPendings(request.params))

    return response.status(403).json({
      status: 'Acesso negado!',
      success: false,
      message: 'Você não está autorizado a acessar esse recurso'
    })
  } catch (err) {
    logger().error(err)

    return response.status(500).json(Object.assign(constants.investment.error.NOT_FOUNDS, { errors: err.message }))
  }
}

/**
 * @api {post} /investment Create
 * @apiName CreateInvestment
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *      "id_fundraising": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *      "amount": 1000,
 *      "date": "2019-11-16"
 *   }
 *
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": 4000,
 *      "message": "Investimento criado com sucesso",
 *      "investment": [
 *        {
 *           "id": "5e891a4e-9195-412a-9f02-135f632c15d0",
 *           "id_investor": "a897eacd-2681-4e08-8062-c8f7e174bace",
 *           "id_fundraising": "54b07d12-e847-4158-9569-71fd1bf1da29",
 *           "amount": "1500.00",
 *           "amount_returned": null,
 *           "date": "2019-09-25T03:00:00.000Z",
 *           "ted_proof_url": null,
 *           "confirmed": false,
 *           "created_date": "2019-12-17T01:20:56.397Z",
 *           "active": true
 *        }
 *      ]
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 4502,
 *      "message": "Erro ao tentar criar a investimento",
 *      "errors": "Valor abaixo do mínimo nescessário"
 *   }
 */
export const create = async (request, response) => {
  try {
    const investment = await repository.create(request.body)

    response.json(Object.assign(constants.investment.success.CREATE, { investment }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(Object.assign(constants.investment.error.CREATE, { errors: err.message }))
  }
}

/**
 * @api {put} /investment/:id/ted TED Confirmation
 * @apiName TEDConfirmation
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Investment ID
 * @apiParam {file} file Image
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "file": [buffer]
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Comprovante de TED enviado com sucesso",
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Dados da requisição inválidos",
 *      "errors": [{}]
 *   }
 */
export const sendTED = async (request, response) => {
  try {
    await repository.sendTED(request.file, request.params.id, request.user.id_profile === 3 ? null : request.user.investor.id)

    response.json(constants.investment.success.TED_CONFIRMATION)
  } catch (err) {
    logger().error(err)

    response.status(500).json(Object.assign(constants.investment.error.TED_CONFIRMATION, { errors: err.message }))
  }
}

/**
 * @api {put} /investment/confirm Investment Confirmation
 * @apiName InvestmentConfirmation
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParam {array} confirmations Investment IDs
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "investments": ["791c50c6-f1eb-4efe-ba41-315d4e3c5e83", "a788426a-258c-49a5-a905-abec5bba222a"]
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
 *      "errors": [{}]
 *   }
 */
export const confirm = async (request, response) => {
  try {
    if (request.user.id_profile === 3) {
      await repository.confirm(request.body.investments)
      return response.json(constants.investment.success.CONFIRMATION)
    }

    return response.status(403).json({
      status: 'Acesso negado!',
      success: false,
      message: 'Você não está autorizado a acessar esse recurso'
    })
  } catch (err) {
    logger().error(err)

    return response.status(500).json(Object.assign(constants.investment.error.CONFIRMATION, { errors: err.message }))
  }
}

/**
 * @api {delete} /investment/:id Cancel
 * @apiName CancelInvestment
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Investment ID
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
 *      "errors": [{}]
 *   }
 */
export const cancel = async (request, response) => {
  try {
    await repository.cancel(request.params.id, request.user.id_profile === 3 ? null : request.user.investor.id)

    response.json(constants.investment.success.CANCEL)
  } catch (err) {
    logger().error(err)

    response.status(500).json(Object.assign(constants.investment.error.CANCEL, { errors: err.message }))
  }
}
