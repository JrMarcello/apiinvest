import { logger } from '../../common/utils'
import constants from '../../common/constants'

// Models
const { Custodian, BankAccount } = require('../../database/models')

/**
 * @api {get} /custodian Get all
 * @apiName GetCustodians
 * @apiGroup Custodian
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "647ac188-62c8-4618-8a0a-be14174aac49",
 *       "cnpj": "34096667000151",
 *       "company_name": "Custodiadora Default SA",
 *       "company_fancy_name": "Custodiadora Default",
 *       "phone": "8333334444",
 *       "agent_name": "João da Silva",
 *	     "agent_email": "joaosilva@custodiadora.com.br",
 *	     "agent_phone": "83988317867",
 *       "create_date": "2019-09-24T04:29:51.726Z",
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
        const custodian = await Custodian.findAll({
            where: {
                active: true
            }
        })

        return response.json(custodian)
    } catch (error) {
        logger().error(error)

        return response.status(500).json(error.apicode ? error : constants.custodian.error.NOT_FOUND)
    }
}

/**
 * @api {get} /custodian/:id Get (By ID)
 * @apiName GetCustodian
 * @apiGroup Custodian
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Custodian ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "id": "647ac188-62c8-4618-8a0a-be14174aac49",
 *      "cnpj": "34096667000151",
 *      "company_name": "Custodiadora Default SA",
 *      "company_fancy_name": "Custodiadora Default",
 *      "phone": "8333334444",
 *      "agent_name": "João da Silva",
 *	    "agent_email": "joaosilva@custodiadora.com.br",
 *	    "agent_phone": "83988317867",
 *      "create_date": "2019-09-24T04:29:51.726Z",
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
        const { params } = request

        const custodian = await Custodian.findByPk(params.id, {
            where: {
                active: true
            }
        })

        return response.json(custodian || {})
    } catch (error) {
        logger().error(error)

        return response.status(500).json(error.apicode ? error : constants.custodian.error.NOT_FOUND)
    }
}

/**
 * @api {post} /custodian Create
 * @apiName CreateCustodian
 * @apiGroup Custodian
 * @apiVersion 1.0.0
 *
 * @apiParam {string} cnpj Custodian cnpj
 * @apiParam {string} company_name Custodian company name
 * @apiParam {string} company_fancy_name Custodian company fancy name
 * @apiParam {string} phone Custodian phone
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "cnpj": "34096667000151",
 *      "company_name": "Custodiadora Default SA",
 *      "company_fancy_name": "Custodiadora Default",
 *      "phone": "8333334444"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Custodiadora criada com sucesso",
 *      "builder": [{
 *        "id": "647ac188-62c8-4618-8a0a-be14174aac49",
 *        "cnpj": "34096667000151",
 *        "company_name": "Custodiadora Default SA",
 *        "company_fancy_name": "Custodiadora Default",
 *        "phone": "8333334444",
 *        "create_date": "2019-09-24T04:29:51.726Z",
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
        const { body } = request

        // 1. Criar o custodiante
        const custodian = await Custodian.create(body)

        // 2. Criar conta bancária
        body.account.reference_id = custodian.id
        body.account.reference_entity = 'custodian'

        await BankAccount.create(body.account)

        return response.json(Object.assign(constants.custodian.success.CREATE, { custodian }))
    } catch (error) {
        logger().error(error)

        return response.status(500).json(error.apicode ? error : constants.custodian.error.CREATE)
    }
}

/**
 * @api {put} /custodian Update
 * @apiName UpdateCustodian
 * @apiGroup Custodian
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Custodian ID
 * @apiParam {string} cnpj Custodian cnpj
 * @apiParam {string} company_name Custodian company name
 * @apiParam {string} company_fancy_name Custodian company fancy name
 * @apiParam {string} phone Custodian phone
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": "647ac188-62c8-4618-8a0a-be14174aac49",
 *      "cnpj": "34096667000151",
 *      "company_name": "Custodiadora Default SA",
 *      "company_fancy_name": "Custodiadora Default",
 *      "phone": "8333334444"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Custodiadora atualizada com sucesso",
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
        const { body } = request

        const custodian = await Custodian.findByPk(body.id)

        if (custodian) {

            // Atualizando apenas as propriedades definidas para atualizar
            Object.keys(body).forEach(key => {
                if (body[key] !== undefined) {
                    custodian[key] = body[key]
                }
            })

            await custodian.save()
        }

        // Atualizar conta bancária
        const account = await BankAccount.findOne({
            where: {
                reference_id: custodian.id,
                reference_entity: 'custodian'
            }
        })

        account.agency = body.account.agency;
        account.account = body.account.account;
        account.bank_code = body.account.bank_code;

        await account.save()

        return response.json(constants.custodian.success.UPDATE)
    } catch (error) {
        logger().error(error)

        return response.status(500).json(error.apicode ? error : constants.custodian.error.UPDATE)
    }
}

/**
 * @api {delete} /custodian/:id Delete
 * @apiName DeleteCustodian
 * @apiGroup Custodian
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Custodian ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Custodiadora deletada com sucesso"
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
        const { params } = request

        const custodian = await Custodian.findByPk(params.id)

        if (custodian) {
            custodian.active = false

            await custodian.save()
        }

        return response.json(constants.custodian.success.REMOVE)
    } catch (err) {
        logger().error(err)

        return response.status(500).json(err.apicode ? err : constants.custodian.error.REMOVE)
    }
}
