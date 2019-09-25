import { logger } from '@common/utils'
import constants from '@common/constants'
import * as repository from './repository'

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
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
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
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
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
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
 * @api {post} /investor Create
 * @apiName Createinvestor
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiParam {string} params Investor params em breve aqui
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
 *      "accounts": [{"agency":"1234", "account":"1234567"}],
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
    const investor = await repository.create(Object.assign(JSON.parse(request.body.data), { files: request.files }))

    response.json(Object.assign(constants.investor.success.CREATED, { investor }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investor.error.NOT_CREATED)
  }
}

// /**
//  * @param {Object} request - HTTP request
//  * @param {Object} response - HTTP response
//  * @returns {Object} HTTP response with status code and data
//  */
// export const update = async (request, response) => {
//   try {
//     await repository.update(request.body)

//     response.json(constants.investor.success.UPDATED)
//   } catch (err) {
//     logger().error(err)

//     response.status(500).json(constants.investor.error.NOT_UPDATED)
//   }
// }

// /**
//  * @param {Object} request - HTTP request
//  * @param {Object} response - HTTP response
//  * @returns {Object} HTTP response with status code and data
//  */
// export const remove = async (request, response) => {
//   try {
//     await repository.remove(request.params.id)

//     response.json(constants.investor.success.REMOVED)
//   } catch (err) {
//     logger().error(err)

//     response.status(500).json(constants.investor.error.NOT_REMOVED)
//   }
// }
