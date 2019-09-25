import { logger } from '@common/utils'
import constants from '@common/constants'
import * as repository from './repository'

/**
 * @api {get} /builder Get all
 * @apiName GetBuilders
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      [{
 *          "code": 5000,
 *          "message": "Construtora criada com sucesso",
 *            "builder": {
 *              "id": "7de6982f-6989-45bd-97d4-973ebeb75295",
 *              "id_user": "647ac188-62c8-4618-8a0a-be14174aac49",
 *              "cnpj": "34096667000152",
 *              "company_name": "Razão social da Construtora",
 *              "company_fancy_name": "Nome fantasia da Construtora",
 *              "address_street": "Rua da construtora",
 *              "address_number": "123",
 *              "address_neighborhood": "Bairro",
 *              "address_city": "Cidade",
 *              "address_state": "Estado",
 *              "address_country": "Pais",
 *              "address_cep": "58000000",
 *              "logo_url": null,
 *              "created_date": "2019-09-24T00:01:22.722Z",
 *              "active": true
 *            }
 *       }]
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
 * @api {get} /builder/:id Get (By ID)
 * @apiName GetBuilder
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Builder ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "id": "7de6982f-6989-45bd-97d4-973ebeb75295",
 *      "id_user": "647ac188-62c8-4618-8a0a-be14174aac49",
 *      "cnpj": "34096667000152",
 *      "company_name": "Razão social da Construtora",
 *      "company_fancy_name": "Nome fantasia da Construtora",
 *      "address_street": "Rua da construtora",
 *      "address_number": "123",
 *      "address_neighborhood": "Bairro",
 *      "address_city": "Cidade",
 *      "address_state": "Estado",
 *      "address_country": "Pais",
 *      "address_cep": "58000000",
 *      "logo_url": null,
 *      "created_date": "2019-09-24T00:01:22.722Z",
 *      "active": true,
 *      "phones": [
 *        {
 *           "id": "1",
 *           "id_builder": "7de6982f-6989-45bd-97d4-973ebeb75295",
 *           "number": "8332333333"
 *        },
 *        {
 *           "id": "2",
 *           "id_builder": "7de6982f-6989-45bd-97d4-973ebeb75295",
 *           "number": "8332344444"
 *        }
 *      ],
 *      "partners": [
 *        {
 *           "id": "1",
 *           "id_builder": "7de6982f-6989-45bd-97d4-973ebeb75295",
 *           "name": "Nome do socio 1",
 *           "company_name": null,
 *           "cpf": "06595212446",
 *           "cnpj": null,
 *           "phone": "8332447788",
 *           "address_street": "Rua do socio 1",
 *           "address_number": "123",
 *           "address_neighborhood": "Bairro",
 *           "address_city": "Cidade",
 *           "address_state": "Estado",
 *           "address_country": "Pais",
 *           "address_cep": "58000000",
 *           "created_date": "2019-09-24T00:01:22.960Z"
 *        },
 *        {
 *           "id": "2",
 *           "id_builder": "7de6982f-6989-45bd-97d4-973ebeb75295",
 *           "name": "Nome fantasia do socio 2",
 *           "company_name": "Razão social do socio 2",
 *           "cpf": null,
 *           "cnpj": "34096667000151",
 *           "phone": "8332447788",
 *           "address_street": "Rua do socio 2",
 *           "address_number": "123",
 *           "address_neighborhood": "Bairro",
 *           "address_city": "Cidade",
 *           "address_state": "Estado",
 *           "address_country": "Pais",
 *           "address_cep": "58000000",
 *           "created_date": "2019-09-24T00:01:22.960Z"
 *        }
 *      ]
 *    }
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
 * @api {get} /builder/user/:id Get (By User ID)
 * @apiName GetBuilderByUserId
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID User ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      [{
 *          "code": 5000,
 *          "message": "Construtora criada com sucesso",
 *            "builder": {
 *              "id": "7de6982f-6989-45bd-97d4-973ebeb75295",
 *              "id_user": "647ac188-62c8-4618-8a0a-be14174aac49",
 *              "cnpj": "34096667000152",
 *              "company_name": "Razão social da Construtora",
 *              "company_fancy_name": "Nome fantasia da Construtora",
 *              "address_street": "Rua da construtora",
 *              "address_number": "123",
 *              "address_neighborhood": "Bairro",
 *              "address_city": "Cidade",
 *              "address_state": "Estado",
 *              "address_country": "Pais",
 *              "address_cep": "58000000",
 *              "logo_url": null,
 *              "created_date": "2019-09-24T00:01:22.722Z",
 *              "active": true
 *            }
 *       }]
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
export const getByUserId = async (request, response) => {
  try {
    response.json(await repository.getByUserId(request.params.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

/**
 * @api {post} /builder Create
 * @apiName CreateBuilder
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {string} params Builder params em breve aqui
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "builder": {
 *        "id_user": "647ac188-62c8-4618-8a0a-be14174aac49",
 *        "cnpj": "34096667000152",
 *        "company_name": "Razão social da Construtora",
 *        "company_fancy_name": "Nome fantasia da Construtora",
 *        "address_street": "Rua da construtora",
 *        "address_number": "123",
 *        "address_neighborhood": "Bairro",
 *        "address_city": "Cidade",
 *        "address_state": "Estado",
 *        "address_country": "Pais",
 *        "address_cep": "58000000"
 *      },
 *      "phones": [{"number":"8332333333"},{"number":"8332344444"}],
 *      "partners": [{
 *        "name": "Nome do socio 1",
 *        "company_name": null,
 *        "cpf": "06595212446",
 *        "cnpj": null,
 *        "phone":"8332447788",
 *        "address_street": "Rua do socio 1",
 *        "address_number": "123",
 *        "address_neighborhood": "Bairro",
 *        "address_city": "Cidade",
 *        "address_state": "Estado",
 *        "address_country": "Pais",
 *        "address_cep": "58000000"
 *      },
 *      {
 *         "name": "Nome fantasia do socio 2",
 *         "company_name": "Razão social do socio 2",
 *         "cpf": null,
 *         "cnpj": "34096667000151",
 *         "phone":"8332447788",
 *         "address_street": "Rua do socio 2",
 *         "address_number": "123",
 *         "address_neighborhood": "Bairro",
 *         "address_city": "Cidade",
 *         "address_state": "Estado",
 *         "address_country": "Pais",
 *         "address_cep": "58000000"
 *       }]
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Construtora criada com sucesso",
 *      "builder": {
 *        "id_user": "647ac188-62c8-4618-8a0a-be14174aac49",
 *        "cnpj": "34096667000152",
 *        "company_name": "Razão social da Construtora",
 *        "company_fancy_name": "Nome fantasia da Construtora",
 *        "address_street": "Rua da construtora",
 *        "address_number": "123",
 *        "address_neighborhood": "Bairro",
 *        "address_city": "Cidade",
 *        "address_state": "Estado",
 *        "address_country": "Pais",
 *        "address_cep": "58000000"
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
    const builder = await repository.create(request.body)

    response.json(Object.assign(constants.builder.success.CREATED, { builder }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.builder.error.NOT_CREATED)
  }
}

/**
 * @api {put} /builder Update
 * @apiName UpdateBuilder
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {string} params Builder params em breve
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id_user": "647ac188-62c8-4618-8a0a-be14174aac49",
 *      "cnpj": "34096667000152",
 *      "company_name": "Razão social da Construtora",
 *      "company_fancy_name": "Nome fantasia da Construtora",
 *      "address_street": "Rua da construtora",
 *      "address_number": "123",
 *      "address_neighborhood": "Bairro",
 *      "address_city": "Cidade",
 *      "address_state": "Estado",
 *      "address_country": "Pais",
 *      "address_cep": "58000000"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Construtora atualizada com sucesso",
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

    response.json(constants.builder.success.UPDATED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.builder.error.NOT_UPDATED)
  }
}

/**
 * @api {delete} /builder/:id Delete
 * @apiName DeleteBuilder
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": eb76cd10-367b-447d-b238-fa8e9eef2a1f
 *   }
 *
 * @apiParam {uuid} ID Builder ID
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Construtora deletada com sucesso"
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

    response.json(constants.builder.success.REMOVED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.builder.error.NOT_REMOVED)
  }
}
