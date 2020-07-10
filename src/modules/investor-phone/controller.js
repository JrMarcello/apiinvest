import { logger } from '../../common/utils'
import constants from '../../common/constants'

// Models
const { InvestorPhone, Sequelize } = require('../../database/models')

/**
 * @api {get} /investor/:idInvestor/phones Get Phone (By Investor ID)
 * @apiName GetInvestorPhone
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} idInvestor Investor ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *      "id": 1,
 *      "id_investor": "eb76cd10-367b-447d-b238-fa8e9eef2a1f",
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
 *        "location": "params"
 *      }]
 *   }
 */
export const getByInvestorId = async (request, response) => {
  try {
    const { user, params } = request

    // TODO: Refatorar
    const id = user.id_profile === 3 ? params.idInvestor : user.investor.id

    const phones = await InvestorPhone.findAll({
      where: {
        id_investor: id
      }
    })

    return response.json(phones)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investor.phone.error.NOT_FOUND)
  }
}

/**
 * @api {post} /investor/:idInvestor/phones Create Phone
 * @apiName CreateInvestorPhone
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} idInvestor Investor ID
 * @apiParam {array} phones Phones numbers
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "phones": [{"number":"83988317864"}, {"number":"83988776655"}]
 *   }
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

    // TODO: Refatorar
    const id = user.id_profile === 3 ? params.idInvestor : user.investor.id

    const promises = []

    for (let index = 0; index < body.phones.length; index += 1) {
      const phone = body.phones[index]

      phone.id_investor = id

      promises.push(InvestorPhone.create(phone))
    }

    const phones = await Promise.all(promises)

    return response.json(Object.assign(constants.investor.phone.success.CREATE, { phones }))
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investor.phone.error.CREATE)
  }
}

/**
 * @api {delete} /investor/:idInvestor/phones/ Delete Phone
 * @apiName DeleteInvestorPhone
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} idInvestor Phone ID
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "ids": [1, 2]
 *   }
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

    // TODO: Refatorar
    const id = user.id_profile === 3 ? params.idInvestor : user.investor.id

    await InvestorPhone.destroy({
      where: {
        [Sequelize.Op.and]: {
          id_investor: id,
          id: {
            [Sequelize.Op.or]: body.ids
          }
        }
      }
    })

    return response.json(constants.investor.phone.success.REMOVE)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investor.phone.error.REMOVE)
  }
}
