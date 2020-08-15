import { logger } from '../../common/utils'
import constants from '../../common/constants'
import statuses from '../../common/statuses'

// Models
const { Building, Builder, Document, Fundraising, Investment, Investor, User, Custodian, Sequelize } = require('../../database/models')

/**
 * @api {get} /fundraising Get all
 * @apiName GetFundraisings
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "cd99df55-e99b-4db1-86cd-143430f1a19a",
 *       "id_building": "e69738af-8619-4335-99b9-153da3f723c6",
 *       "id_custodian": null,
 *       "amount": "2536216.00",
 *       "investment_min_value": "1000",
 *       "investment_percentage": "0.05",
 *       "return_date": "2022-12-15",
 *       "initial_date": "2019-09-24T03:00:00.000Z",
 *       "final_date": "2019-09-30T03:00:00.000Z",
 *       "finished": false,
 *       "created_date": "2019-09-24T19:08:56.438Z",
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
    const fundraisings = await Fundraising.findAll()

    return response.json(fundraisings)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.fundraising.error.NOT_FOUND)
  }
}

/**
 * @api {get} /fundraising/:id Get (By ID)
 * @apiName GetFundraising
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Fundraising ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *       "id": "cd99df55-e99b-4db1-86cd-143430f1a19a",
 *       "id_building": "e69738af-8619-4335-99b9-153da3f723c6",
 *       "id_custodian": null,
 *       "amount": "2536216.00",
 *       "investment_min_value": "1000",
 *       "investment_percentage": "0.05",
 *       "return_date": "2022-12-15",
 *       "initial_date": "2019-09-24T03:00:00.000Z",
 *       "final_date": "2019-09-30T03:00:00.000Z",
 *       "finished": false,
 *       "created_date": "2019-09-24T19:08:56.438Z",
 *       "active": true
 *   }
 *
 *  @apiErrorExample Error-Response:
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
    const { params } = request

    const fundraising = await Fundraising.findByPk(params.id)

    return response.json(fundraising || {})
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.fundraising.error.NOT_FOUND)
  }
}

/**
 * @api {get} /fundraising/building/:idBuilding Get (By Building ID)
 * @apiName GetFundraisingsByBuildingID
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} idBuilding Building ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "cd99df55-e99b-4db1-86cd-143430f1a19a",
 *       "id_building": "e69738af-8619-4335-99b9-153da3f723c6",
 *       "id_custodian": null,
 *       "amount": "2536216.00",
 *       "investment_min_value": "1000",
 *       "investment_percentage": "0.05",
 *       "return_date": "2022-12-15",
 *       "initial_date": "2019-09-24T03:00:00.000Z",
 *       "final_date": "2019-09-30T03:00:00.000Z",
 *       "finished": false,
 *       "created_date": "2019-09-24T19:08:56.438Z",
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
 *          "param": "idBuilding",
 *          "location": "params"
 *        }]
 *     }
 */
export const getByBuildingId = async (request, response) => {
  try {
    const { params } = request

    const fundraisings = await Fundraising.findAll({
      where: {
        id_building: params.idBuilding
      },
      include: [
        {
          model: Investment,
          as: 'investments',
          include: [
            {
              model: Investor,
              as: 'investor'
            }
          ]
        }
      ]
    })

    return response.json(fundraisings)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.fundraising.error.NOT_FOUND)
  }
}

/**
 * @api {get} /fundraising/:id/amountraised Get Amount Raised
 * @apiName GetAmountRaised
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Fundraising ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "amount": 100000
 *   }
 *
 *  @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Erro ao buscar total captado",
 *   }
 */
export const getAmountRaised = async (request, response) => {
  try {
    const { params } = request

    const amount = await Investment.sum('amount', {
      where: {
        id_fundraising: params.id,
        status: statuses.investment.CONFIRMED
      }
    })

    return response.json({ amount })
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.fundraising.error.AMOUNT_RAISED)
  }
}

export const getAllClosed = async (request, response) => {
  try {
    // Nome da obra
    // Nome da empresa
    // CNPJ
    // Data de encerramento
    // Valor captado
    // Último relatório

    const fundraisings = await Fundraising.findAll({
      where: {
        status: statuses.fundraising.CLOSED
      },
      include: [
        {
          model: Building,
          as: 'building',
          attributes: ['name', 'cnpj'],
          include: [
            {
              model: Builder,
              as: 'builder',
              attributes: ['company_name', 'cnpj']
            },
            {
              model: Document,
              as: 'documents',
              required: false,
              where: {
                reference_entity: 'building',
                type: statuses.document.PDF
              }
            }
          ]
        },
        {
          model: Investment,
          as: 'investments',
          attributes: ['amount']
        }
      ],
      attributes: ['final_date']
    })

    // Organizando dados
    const result = []

    fundraisings.forEach(fundraising => {
      const captured = fundraising.investments.reduce((previous, current) => Number(previous) + Number(current.amount), 0)

      const reports = fundraising.building.documents.sort((a, b) => b.createdAt - a.createdAt)

      result.push({
        building: {
          name: fundraising.building.name,
          cnpj: fundraising.building.cnpj
        },
        builder: {
          name: fundraising.building.builder.company_name,
          cnpj: fundraising.building.builder.cnpj
        },
        last_report: reports && reports.length > 0 ? reports.pop().createdAt : null,
        final_date: fundraising.final_date,
        captured_amount: captured
      })
    })

    return response.json(result)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.fundraising.error.NOT_FOUND)
  }
}

export const getAllOpened = async (request, response) => {
  try {
    // Nome da obra
    // Detalhes
    // Investimento mínimo
    // Tempo de retorno
    // Valor já captado
    // Valor alvo
    // Status

    // Número de investidores atual
    // Rentabilidade a.a

    const fundraisings = await Fundraising.findAll({
      where: {
        status: {
          [Sequelize.Op.or]: [statuses.fundraising.OPENED, statuses.fundraising.CONFIRMED]
        }
      },
      include: [
        {
          model: Building,
          as: 'building',
          attributes: ['id', 'name', 'description', 'cnpj'],
          include: [
            {
              model: Builder,
              as: 'builder',
              attributes: ['company_name', 'cnpj']
            },
            {
              model: Document,
              as: 'documents',
              required: false,
              where: {
                reference_entity: 'building',
                type: statuses.document.IMAGE
              }
            }
          ]
        },
        {
          model: Investment,
          as: 'investments',
          attributes: ['amount']
        }
      ],
      attributes: ['investment_min_value', 'return_date', 'amount', 'status']
    })

    // Organizando dados
    const result = []

    fundraisings.forEach(fundraising => {
      const captured = fundraising.investments.reduce((previous, current) => Number(previous) + Number(current.amount), 0)

      if (
        fundraising.status === statuses.fundraising.OPENED ||
        (fundraising.status === statuses.fundraising.CONFIRMED && fundraising.amount > captured)
      ) {
        result.push({
          building: {
            name: fundraising.building.name,
            details: fundraising.building.description,
            cnpj: fundraising.building.cnpj,
            image: fundraising.building.documents[0] ? fundraising.building.documents[0].url : null
          },
          builder: {
            name: fundraising.building.builder.company_name,
            cnpj: fundraising.building.builder.cnpj
          },
          link: `${process.env.PORTAL_URL}/public/empreendimento/${fundraising.building.id}`,
          minimum_investment: Number(fundraising.investment_min_value),
          return_date: fundraising.return_date,
          captured_amount: captured,
          target_amount: Number(fundraising.amount),
          status: fundraising.status,

          // TODO: Realizar cálculo após task de obter valores corretos
          profitability: 12.68
        })
      }
    })

    return response.json(result)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.fundraising.error.NOT_FOUND)
  }
}

/**
 * @api {get} /fundraising/:id/investors Get Fundraising's investors
 * @apiName GetFundraisingInvestors
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Fundraising ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [
 *      {
 *         "id": "a897eacd-2681-4e08-8062-c8f7e174bace",
 *         "name": "Investidor Buildinvest",
 *         "avatar_url": null
 *      },
 *      {
 *         "id": "a897eacd-2681-4e08-8062-c8f7e174bace",
 *         "name": "Investidor Buildinvest",
 *         "avatar_url": null
 *      }
 *   ]
 *
 *  @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Erro ao buscar os Investidores da Captação",
 *   }
 */
export const getInvestorsByFundraisingId = async (request, response) => {
  try {
    const { params } = request

    const investors = await Investment.findAll({
      where: {
        id_fundraising: params.id
      },
      include: [
        {
          model: Investor,
          as: 'investor',
          include: [
            {
              model: User,
              as: 'user'
            }
          ]
        }
      ]
    })

    return response.json(investors)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.fundraising.error.INVESTORS)
  }
}

/**
 * @api {post} /fundraising Create
 * @apiName CreateFundraising
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id_building": "e69738af-8619-4335-99b9-153da3f723c6",
 *      "id_custodian": null,
 *      "amount": "2536216.00",
 *      "investment_min_value": "1000",
 *      "investment_percentage": "0.05",
 *      "return_date": "2022-12-15",
 *      "initial_date": "2019-09-24",
 *      "final_date": "2019-09-30"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": 6000,
 *      "message": "Captação criada com sucesso",
 *      "fundraising": [
 *        {
 *           "id": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *           "id_building": "8dff5f89-dbd1-4db1-b3ac-ee4d3904429a",
 *           "id_custodian": "647ac188-62c8-4618-8a0a-be14174aac49",
 *           "amount": "1000.00",
 *           "investment_min_value": "1000",
 *           "investment_percentage": "0.05",
 *           "return_date": "2022-12-15",
 *           "initial_date": "2019-08-25T03:00:00.000Z",
 *           "final_date": "2020-02-25T03:00:00.000Z",
 *           "finished": false,
 *           "created_date": "2019-09-25T00:32:04.442Z",
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
 *        "param": "cnpj",
 *        "location": "body"
 *      }]
 *   }
 */
export const create = async (request, response) => {
  try {
    const { body } = request

    // O valor total da captação não deve ultrapassar de R$5.000.000,00
    if (body.amount > 500000) {
      return response.status(400).json(constants.fundraising)
    }

    const custodian = await Custodian.findOne({})

    body.investment_percentage = 0.05
    body.id_custodian = custodian.id
    body.status = statuses.fundraising.OPENED

    const fundraising = await Fundraising.create(body)

    return response.json(Object.assign(constants.fundraising.success.CREATE, { fundraising }))
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.fundraising.error.CREATE)
  }
}

/**
 * @api {put} /fundraising Update
 * @apiName UpdateFundraising
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *      "amount": "100000",
 *      "investment_min_value": "1000",
 *      "investment_percentage": "0.05",
 *      "return_date": "2022-12-15",
 *      "initial_date": "2019-08-25",
 *      "final_date": "2020-02-25"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Captação atualizada com sucesso",
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

    const fundraising = await Fundraising.findByPk(body.id)

    if (fundraising) {
      // Atualizando apenas as propriedades definidas para atualizar
      Object.keys(body).forEach(key => {
        if (body[key] !== undefined) {
          fundraising[key] = body[key]
        }
      })

      await fundraising.save()
    }

    return response.json(constants.fundraising.success.UPDATE)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.fundraising.error.UPDATE)
  }
}

/**
 * @api {put} /fundraising/:id/finish Finish
 * @apiName FinishFundraising
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Fundraising ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Captação encerrada com sucesso"
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
export const finish = async (request, response) => {
  try {
    const { params } = request

    const fundraising = await Fundraising.findByPk(params.id)

    if (fundraising) {
      fundraising.status = statuses.fundraising.CLOSED

      await fundraising.save()
    }

    return response.json(constants.fundraising.success.FINISH)
  } catch (err) {
    logger().error(err)

    return response.status(500).json(err.apicode ? err : constants.fundraising.error.FINISH)
  }
}

/**
 * @api {delete} /fundraising/:id Remove
 * @apiName RemoveFundraising
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Fundraising ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Captação removida com sucesso"
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
    const { params } = request

    const fundraising = await Fundraising.findByPk(params.id)

    if (fundraising) {
      fundraising.active = false

      await fundraising.save()
    }

    return response.json(constants.fundraising.success.REMOVE)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.fundraising.error.REMOVE)
  }
}
