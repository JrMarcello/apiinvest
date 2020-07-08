import { logger } from '../../common/utils'
import constants from '../../common/constants'

// Models
const { BuilderPartner, Sequelize } = require('../../database/models')

/**
 * @api {get} /builder/:idBuilder/partners Get Partners (By Builder ID)
 * @apiName GetBuilderPartner
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Builder ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
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
 *        "location": "params"
 *      }]
 *   }
 */
export const getByBuilderId = async (request, response) => {
  try {
    const { user, params } = request

    // TODO: Refatorar
    const id = user.id_profile === 3 ? params.idBuilder : user.builder.id

    const partners = await BuilderPartner.findAll({
      where: {
        id_builder: id
      }
    })

    return response.json(partners)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.builder.partners.error.NOT_FOUND)
  }
}

/**
 * @api {post} /builder/:idBuilder/partners Create Partners
 * @apiName CreateBuilderPartner
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} idBuilder Builder ID
 * @apiParam {array} partners Partners data
 *
 * @apiParamExample {json} Request-Example:
 *   { "partners": [{
 *       "name": "Nome do socio 1",
 *       "company_name": null,
 *       "cpf": "06595212446",
 *       "cnpj": null,
 *       "phone": "8332447788",
 *       "address_street": "Rua do socio 1",
 *       "address_number": "123",
 *       "address_neighborhood": "Bairro",
 *       "address_city": "Cidade",
 *       "address_state": "Estado",
 *       "address_country": "Pais",
 *       "address_cep": "58000000"
 *     }]
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": 9000,
 *      "message": "Sócio criado com sucesso",
 *      "partners": [
 *        {
 *          "id": "4",
 *          "id_builder": "3136962d-e525-4eb8-9721-ba7dc329d622",
 *          "name": "Nome do socio 2",
 *          "company_name": null,
 *          "cpf": "06595212556",
 *          "cnpj": null,
 *          "phone": "8332447799",
 *          "address_street": "Rua do socio 2",
 *          "address_number": "321",
 *          "address_neighborhood": "Bairro",
 *          "address_city": "Cidade",
 *          "address_state": "Estado",
 *          "address_country": "Pais",
 *          "address_cep": "58000000",
 *          "created_date": "2019-12-08T18:31:15.589Z"
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
 *        "param": "cnpj",
 *        "location": "body"
 *      }]
 *   }
 */
export const create = async (request, response) => {
  try {
    const { params, user, body } = request

    // TODO: Refatorar
    const id = user.id_profile === 3 ? params.idBuilder : user.builder.id

    const promises = []

    for (let index = 0; index < body.partners.length; index += 1) {
      const partner = body.partners[index]

      partner.id_builder = id

      promises.push(BuilderPartner.create(partner))
    }

    const partners = await Promise.all(promises)

    return response.json(Object.assign(constants.builder.partners.success.CREATE, { partners }))
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.builder.partners.error.CREATE)
  }
}

/**
 * @api {delete} /builder/:idBuilder/partners Delete Partners
 * @apiName DeleteBuilderPartner
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
 *        "location": "params"
 *      }]
 *   }
 */
export const remove = async (request, response) => {
  try {
    const { params, user, body } = request

    // TODO: Refatorar
    const id = user.id_profile === 3 ? params.idBuilder : user.builder.id

    await BuilderPartner.destroy({
      where: {
        [Sequelize.Op.and]: {
          id_builder: id,
          id: {
            [Sequelize.Op.or]: body.ids
          }
        }
      }
    })

    return response.json(constants.builder.partners.success.REMOVE)
  } catch (err) {
    logger().error(err)

    return response.status(500).json(err.apicode ? err : constants.builder.partners.error.REMOVE)
  }
}
