import { logger } from '../../common/utils'
import constants from '../../common/constants'
import * as repository from './repository'

/**
 * @api {get} /investor/:idInvestor/bank-account Get Bank Account (By Investor ID)
 * @apiName GetInvestorBankAccount
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} idInvestor Investor ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "1",
 *       "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *       "bank_code": "001",
 *       "agency": "1234",
 *       "account": "1234567",
 *       "created_date": "2019-09-25T01:44:41.530Z",
 *       "active": true
 *   }]
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Dados da requisição inválidos",
 *      "errors": [{
 *        "msg": "Invalid value",
 *        "param": "idInvestor",
 *        "location": "params"
 *      }]
 *   }
 */
export const getByInvestorId = async (request, response) => {
  try {
    response.json(
      await repository.getByInvestorId(
        request.user.id_profile === 3 ? request.params.idInvestor : request.user.investor.id
      )
    )
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

/**
 * @api {post} /investor/:idInvestor/bank-account Create Bank Account
 * @apiName CreateBankAccount
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} idInvestor Investor ID
 * @apiParam {array} accounts Bank Account data
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *       "accounts": [{
 *         "bank_code": "001",
 *         "agency": "1234",
 *         "account": "1234567"
 *        }]
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Conta criada com sucesso",
 *      "account": [{
 *        "id": "1",
 *        "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *        "bank_code": "001",
 *        "agency": "1234",
 *        "account": "1234567",
 *        "created_date": "2019-09-25T01:44:41.530Z",
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
    const accounts = await repository.create(
      request.user.id_profile === 3 ? request.params.idInvestor : request.user.investor.id,
      request.body.accounts
    )

    response.json(Object.assign(constants.investor_bank_account.success.CREATED, { accounts }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investor_bank_account.error.NOT_CREATED)
  }
}

/**
 * @api {delete} /investor/:idInvestor/bank-account/:id Delete Bank Account
 * @apiName DeleteBankAccount
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} idInvestor Investor ID
 * @apiParam {int} id Bank Account ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Conta deletada com sucesso"
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
    await repository.remove(
      request.user.id_profile === 3 ? request.params.idInvestor : request.user.investor.id,
      request.params.id
    )

    response.json(constants.investor_bank_account.success.REMOVED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investor_bank_account.error.NOT_REMOVED)
  }
}
