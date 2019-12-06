import { logger } from '../../common/utils'
import constants from '../../common/constants'
import * as repository from './repository'

/**
 * @api {get} /builder/:id/partner Get Partner (By Builder ID)
 * @apiName GetBuilderPartner
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Builder ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "id": "1",
 *      "id_builder": "7de6982f-6989-45bd-97d4-973ebeb75295",
 *      "name": "Nome do socio 1",
 *      "company_name": null,
 *      "cpf": "06595212446",
 *      "cnpj": null,
 *      "phone": "8332447788",
 *      "address_street": "Rua do socio 1",
 *      "address_number": "123",
 *      "address_neighborhood": "Bairro",
 *      "address_city": "Cidade",
 *      "address_state": "Estado",
 *      "address_country": "Pais",
 *      "address_cep": "58000000",
 *      "created_date": "2019-09-24T00:01:22.960Z"
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
    response.json(
      await repository.getByBuilderId(request.user.id_profile === 3 ? request.params.id : request.user.builder.id)
    )
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

/**
 * @api {post} /builder/partner Create Partner
 * @apiName CreateBuilderPartner
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {string} params Builder Partner params em breve aqui
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id_builder": "7de6982f-6989-45bd-97d4-973ebeb75295",
 *      "name": "Nome do socio 1",
 *      "company_name": null,
 *      "cpf": "06595212446",
 *      "cnpj": null,
 *      "phone": "8332447788",
 *      "address_street": "Rua do socio 1",
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
 *      "message": "Construtora criada com sucesso",
 *      "builder": [{
 *        "id": "1",
 *        "id_builder": "7de6982f-6989-45bd-97d4-973ebeb75295",
 *        "name": "Nome do socio 1",
 *        "company_name": null,
 *        "cpf": "06595212446",
 *        "cnpj": null,
 *        "phone": "8332447788",
 *        "address_street": "Rua do socio 1",
 *        "address_number": "123",
 *        "address_neighborhood": "Bairro",
 *        "address_city": "Cidade",
 *        "address_state": "Estado",
 *        "address_country": "Pais",
 *        "address_cep": "58000000",
 *        "created_date": "2019-09-24T00:01:22.960Z"
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
    const partners = await repository.create(
      request.user.id_profile === 3 ? request.params.id : request.user.builder.id,
      request.body.partners
    )

    response.json(Object.assign(constants.builder_partner.success.CREATED, { partners }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.builder_partner.error.NOT_CREATED)
  }
}

/**
 * @api {delete} /builder/partner/:id Delete Partner
 * @apiName DeleteBuilderPartner
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": eb76cd10-367b-447d-b238-fa8e9eef2a1f
 *   }
 *
 * @apiParam {uuid} ID Builder Partner ID
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Sócio deletado com sucesso"
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
      request.user.id_profile === 3 ? request.params.idBuilder : request.user.builder.id,
      request.params.id
    )

    response.json(constants.builder_partner.success.REMOVED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.builder_partner.error.NOT_REMOVED)
  }
}
