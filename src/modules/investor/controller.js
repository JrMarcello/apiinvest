import { logger } from '../../common/utils'
import constants from '../../common/constants'
import * as repository from './repository'

/**
 * @api {get} /investor Get all
 * @apiName GetInvestors
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *       "id_user": "647ac188-62c8-4618-8a0a-be14174aac49",
 *       "cpf": "06595512416",
 *       "cnpj": null,
 *       "name": " Investidor Buildinvest",
 *       "company_name": null,
 *       "address_street": "Rua do investidor",
 *       "address_number": "123",
 *       "address_neighborhood": "Bairro do investidor",
 *       "address_city": "Cidade do Investidor",
 *       "address_state": "Estado do Investidor",
 *       "address_country": "Pais do Investidor",
 *       "address_cep": "58000000",
 *       "created_date": "2019-09-25T01:44:40.034Z",
 *       "active": true
 *   }]
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *     {
 *        "code": 9999,
 *        "message": "Requisição inválida",
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

    return response.status(500).json(constants.investor.error.NOT_FOUND)
  }
}

/**
 * @api {get} /investor/:id Get (By ID)
 * @apiName GetInvestor
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Investor ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "id": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *      "email": "buildinvest@admin.com",
 *      "username": "Buildinvest Admin",
 *      "id_user": "647ac188-62c8-4618-8a0a-be14174aac49",
 *      "cpf": "06595512416",
 *      "cnpj": null,
 *      "name": " Investidor Buildinvest",
 *      "company_name": null,
 *      "address_street": "Rua do investidor",
 *      "address_number": "123",
 *      "address_neighborhood": "Bairro do investidor",
 *      "address_city": "Cidade do Investidor",
 *      "address_state": "Estado do Investidor",
 *      "address_country": "Pais do Investidor",
 *      "address_cep": "58000000",
 *      "created_date": "2019-09-25T01:44:40.034Z",
 *      "active": true,
 *      "phones": [
 *        {
 *           "id": "1",
 *           "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *           "number": "8332333333"
 *        },
 *        {
 *           "id": "2",
 *           "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *           "number": "8332344444"
 *        }
 *      ],
 *      "accounts": [
 *        {
 *           "id": "1",
 *           "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *           "agency": "1234",
 *           "account": "1234567",
 *           "created_date": "2019-09-25T01:44:41.530Z",
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
 *        "param": "id",
 *        "location": "params"
 *      }]
 *   }
 */
export const getById = async (request, response) => {
  try {
    response.json(await repository.getById(request.user.id_profile === 3 ? request.params.id : request.user.investor.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investor.error.NOT_FOUND)
  }
}

/**
 * @api {get} /investor/user/:id Get (By User ID)
 * @apiName GetInvestorByUserId
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID User ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "email": "buildinvest@admin.com",
 *      "username": "Buildinvest Admin",
 *      "id": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *      "id_user": "647ac188-62c8-4618-8a0a-be14174aac49",
 *      "cpf": "06595512416",
 *      "cnpj": null,
 *      "name": " Investidor Buildinvest",
 *      "company_name": null,
 *      "address_street": "Rua do investidor",
 *      "address_number": "123",
 *      "address_neighborhood": "Bairro do investidor",
 *      "address_city": "Cidade do Investidor",
 *      "address_state": "Estado do Investidor",
 *      "address_country": "Pais do Investidor",
 *      "address_cep": "58000000",
 *      "created_date": "2019-09-25T01:44:40.034Z",
 *      "active": true,
 *      "phones": [
 *        {
 *           "id": "1",
 *           "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *           "number": "8332333333"
 *        },
 *        {
 *           "id": "2",
 *           "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *           "number": "8332344444"
 *        }
 *      ],
 *      "accounts": [
 *        {
 *           "id": "1",
 *           "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *           "agency": "1234",
 *           "account": "1234567",
 *           "created_date": "2019-09-25T01:44:41.530Z",
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
 *        "param": "id",
 *        "location": "params"
 *      }]
 *   }
 */
export const getByUserId = async (request, response) => {
  try {
    response.json(await repository.getByUserId(request.user.id_profile === 3 ? request.params.id : request.user.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investor.error.NOT_FOUND)
  }
}

/**
 * @api {get} /investor/:id/investments Get all from Investor
 * @apiName getAllInvestmentsById
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "f77880cf-4864-4a27-b15c-34fae2566a38",
 *       "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *       "id_fundraising": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *       "amount": "1000.00",
 *       "amount_returned": null,
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
 *        "errors": [{
 *          "msg": "Invalid value",
 *          "param": "id",
 *          "location": "params"
 *        }]
 *     }
 */
export const getAllInvestmentsById = async (request, response) => {
  try {
    response.json(await repository.getAllInvestmentsById(request.user.id_profile === 3 ? request.params.id : request.user.investor.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investor.error.NOT_FOUND)
  }
}

/**
 * @api {get} /investor/:id/investments/count Get the total number of investments from Investor
 * @apiName getInvestmentsCount
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "count": 13
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *     {
 *        "code": 9999,
 *        "message": "Requisição inválida",
 *        "errors": [{
 *          "msg": "Invalid value",
 *          "param": "id",
 *          "location": "params"
 *        }]
 *     }
 */
export const getInvestmentsCount = async (request, response) => {
  try {
    response.json(await repository.getInvestmentsCount(request.user.id_profile === 3 ? request.params.id : request.user.investor.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investor.error.NOT_FOUND)
  }
}

/**
 * @api {get} /investor/:id/investments/invested-amount Get the invested amount from Investor
 * @apiName getInvestedAmount
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "amount": 21564.78
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *     {
 *        "code": 9999,
 *        "message": "Requisição inválida",
 *        "errors": [{
 *          "msg": "Invalid value",
 *          "param": "id",
 *          "location": "params"
 *        }]
 *     }
 */
export const getInvestedAmount = async (request, response) => {
  try {
    response.json(await repository.getInvestedAmount(request.user.id_profile === 3 ? request.params.id : request.user.investor.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investor.error.NOT_FOUND)
  }
}

/**
 * @api {post} /investor Create
 * @apiName Createinvestor
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "investor": {
 *	      "id_user": "647ac188-62c8-4618-8a0a-be14174aac49",
 *	      "cpf": "06595512416",
 *	      "name": " Investidor Buildinvest",
 *	      "address_street": "Rua do investidor",
 *	      "address_number": "123",
 *	      "address_neighborhood": "Bairro do investidor",
 *	      "address_city": "Cidade do Investidor",
 *	      "address_state": "Estado do Investidor",
 *	      "address_country": "Pais do Investidor",
 *	      "address_cep": "58000000"
 *      },
 *      "phones":[{"number":"8332333333"},{"number":"8332344444"}],
 *      "accounts": [{"agency":"1234", "account":"1234567"}]
 *      "docs": [[buffer], [buffer], [buffer]]
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": 3000,
 *      "message": "Investidor criado com sucesso",
 *      "investor": {
 *        "id": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *        "id_user": "647ac188-62c8-4618-8a0a-be14174aac49",
 *        "cpf": "06595512416",
 *        "cnpj": null,
 *        "name": " Investidor Buildinvest",
 *        "company_name": null,
 *        "address_street": "Rua do investidor",
 *        "address_number": "123",
 *        "address_neighborhood": "Bairro do investidor",
 *        "address_city": "Cidade do Investidor",
 *        "address_state": "Estado do Investidor",
 *        "address_country": "Pais do Investidor",
 *        "address_cep": "58000000",
 *        "created_date": "2019-09-25T01:44:40.034Z",
 *        "active": true
 *      }
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
    const data = {}

    data.investor = JSON.parse(request.body.investor)
    data.phones = JSON.parse(request.body.phones)
    data.accounts = JSON.parse(request.body.accounts)
    data.files = request.files

    if (request.user.id_profile !== 3) data.investor.id_user = request.user.id

    const investor = await repository.create(data)

    response.json(Object.assign(constants.investor.success.CREATED, { investor }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investor.error.NOT_CREATED)
  }
}

/**
 * @apiParamExample {json} Request-Example:
 *   {
 *	    "id": "647ac188-62c8-4618-8a0a-be14174aac49",
 *	    "cpf": "06595512416",
 *      "cnpj": null
 *	    "name": " Investidor Buildinvest",
 *      "company_name": null,
 *	    "address_street": "Rua do investidor",
 *	    "address_number": "123",
 *	    "address_neighborhood": "Bairro do investidor",
 *	    "address_city": "Cidade do Investidor",
 *	    "address_state": "Estado do Investidor",
 *	    "address_country": "Pais do Investidor",
 *	    "address_cep": "58000000"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": 3000,
 *      "message": "Investidor atualizado com sucesso",
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Dados da requisição inválidos",
 *      "errors": [{
 *        "msg": "Invalid value",
 *        "param": "cpf",
 *        "location": "body"
 *      }]
 *   }
 */
export const update = async (request, response) => {
  try {
    if (request.user.id_profile !== 3) request.body.id = request.user.investor.id

    await repository.update(request.body)

    response.json(constants.investor.success.UPDATED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investor.error.NOT_UPDATED)
  }
}
