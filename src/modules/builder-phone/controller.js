import { logger } from '../../common/utils'
import constants from '../../common/constants'

// Models
const { Phone, Sequelize } = require('../../database/models')

/**
 * @api {get} /builder/:idBuilder/phones Get Phone (By Builder ID)
 * @apiName GetBuilderPhone
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} Builder ID Builder ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *      "id": 123,
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
export const getByBuilderId = async (request, response) => {
  try {
    const { user, params } = request

    const id = user.id_profile === 3 ? params.idBuilder : user.builder.id

    const phones = await Phone.findAll({
      where: {
        reference_id: id,
        reference_entity: 'builder'
      }
    })

    return response.json(phones)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.builder.phones.error.NOT_FOUND)
  }
}

/**
 * @api {post} /builder/:idBuilder/phones Create Phone
 * @apiName CreateBuilderPhone
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} idBuilder Builder ID
 * @apiParam {array} phones Phones numbers
 *
 * @apiParamExample {json} Request-Example:
 *   { "phones": [{ "83988317864" }] }
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
    const { params, user, body } = request

    const id = user.id_profile === 3 ? params.idBuilder : user.builder.id

    const promises = []

    for (let index = 0; index < body.phones.length; index += 1) {
      const number = body.phones[index]

      const phone = {
        reference_id: id,
        reference_entity: 'builder',
        number
      }

      promises.push(Phone.create(phone))
    }

    const phones = await Promise.all(promises)

    return response.json(Object.assign(constants.builder.phones.success.CREATE, { phones }))
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.builder.phones.error.CREATE)
  }
}

/**
 * @api {delete} /builder/:idBuilder/phones Delete Phones
 * @apiName DeleteBuilderPhone
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
 *        "location": "params"
 *      }]
 *   }
 */
export const remove = async (request, response) => {
  try {
    const { params, user, body } = request

    const id = user.id_profile === 3 ? params.idBuilder : user.builder.id

    await Phone.destroy({
      where: {
        [Sequelize.Op.and]: {
          reference_id: id,
          reference_entity: 'builder',
          id: {
            [Sequelize.Op.or]: body.ids
          }
        }
      }
    })

    return response.json(constants.builder.phones.success.REMOVE)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.builder.phones.error.REMOVE)
  }
}
