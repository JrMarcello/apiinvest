// import moment from 'moment'
import { env, logger } from '../../common/utils'
import { sendEmail } from '../../core/mailer'
import { uploadFile } from '../../core/storage'
import constants from '../../common/constants'
import statuses from '../../common/statuses'

// Models
const { Building, Investment, Investor, Fundraising, RequirementsHistory, Sequelize } = require('../../database/models')

/**
 * @api {get} /investment Get all
 * @apiName GetInvestments
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "f77880cf-4864-4a27-b15c-34fae2566a38",
 *       "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *       "id_fundraising": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *       "amount": "1000.00",
 *       "amount_returned": "0",
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
 *        "errors": [{}]
 *     }
 */
export const getAll = async (request, response) => {
  try {
    const investments = await Investment.findAll({})

    return response.json(investments)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investment.error.NOT_FOUND)
  }
}

/**
 * @api {get} /investment/:id Get (By ID)
 * @apiName GetInvestment
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Investment ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "id": "5e891a4e-9195-412a-9f02-135f632c15d0",
 *      "id_investor": "a897eacd-2681-4e08-8062-c8f7e174bace",
 *      "id_fundraising": "54b07d12-e847-4158-9569-71fd1bf1da29",
 *      "amount": "1500.00",
 *      "amount_returned": null,
 *      "date": "2019-09-25T03:00:00.000Z",
 *      "ted_proof_url": null,
 *      "confirmed": false,
 *      "created_date": "2019-12-17T01:20:56.397Z",
 *      "active": true
 *   }
 
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
    const { params } = request

    const investment = await Investment.findByPk(params.id)

    return response.json(investment || {})
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investment.error.NOT_FOUND)
  }
}

/**
 * @api {get} /investment/investor/:id Get (By Investor ID)
 * @apiName GetInvestmentsByInvestorId
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Investor ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "44cec654-9c2f-4586-90ab-bf1490de5146",
 *       "id_investor": "a897eacd-2681-4e08-8062-c8f7e174bace",
 *       "id_fundraising": "54b07d12-e847-4158-9569-71fd1bf1da29",
 *       "amount": "1000.00",
 *       "amount_returned": null,
 *       "date": "2019-11-16T03:00:00.000Z",
 *       "ted_proof_url": null,
 *       "confirmed": false,
 *       "created_date": "2019-12-17T01:34:42.000Z",
 *       "active": true,
 *       "amount_fundraising": "100000.00",
 *       "investment_percentage": "0.05",
 *       "return_date": "2022-12-15T03:00:00.000Z",
 *       "id_building": "a8bf6952-f81d-425b-9c84-478a55829027",
 *       "cnpj_building": "34096667000188",
 *       "name_building": "Nome da obra",
 *       "vgv_building": "1000000.00",
 *       "final_date_building": "2022-12-15T03:00:00.000Z"
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
export const getByInvestorId = async (request, response) => {
  try {
    const { user, params } = request

    const id = user.id_profile === 3 ? params.id : user.investor.id

    const investments = await Investment.findAll({
      where: {
        id_investor: id
      },
      include: [
        {
          model: Fundraising,
          as: 'fundraising',
          include: [
            {
              model: Building,
              as: 'building'
            }
          ]
        }
      ]
    })

    return response.json(investments)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investment.error.NOT_FOUND)
  }
}

/**
 * @api {get} /investment/fundraising/:id Get (By Fundraising ID)
 * @apiName GetInvestmentsByFundraisingId
 * @apiGroup Fundraising
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Fundraising ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "5e891a4e-9195-412a-9f02-135f632c15d0",
 *       "id_investor": "a897eacd-2681-4e08-8062-c8f7e174bace",
 *       "id_fundraising": "54b07d12-e847-4158-9569-71fd1bf1da29",
 *       "amount": "1500.00",
 *       "amount_returned": null,
 *      "date": "2019-09-25T03:00:00.000Z",
 *        "ted_proof_url": null,
 *       "confirmed": false,
 *       "created_date": "2019-12-17T01:20:56.397Z",
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
export const getByFundraisingId = async (request, response) => {
  try {
    const { params } = request

    const investments = await Investment.findAll({
      where: {
        id_fundraising: params.id
      },
      include: [
        {
          model: Fundraising,
          as: 'fundraising',
          include: [
            {
              model: Building,
              as: 'building'
            }
          ]
        }
      ]
    })

    return response.json(investments)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investment.error.NOT_FOUND)
  }
}

/**
 * @api {get} /investment/pendings Get all pedings
 * @apiName GetInvestmentsPendings
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "5e891a4e-9195-412a-9f02-135f632c15d0",
 *       "id_investor": "a897eacd-2681-4e08-8062-c8f7e174bace",
 *       "id_fundraising": "54b07d12-e847-4158-9569-71fd1bf1da29",
 *       "amount": "1500.00",
 *       "amount_returned": null,
 *       "date": "2019-09-25T03:00:00.000Z",
 *       "ted_proof_url": "https://storage.googleapis.com/storebuild-01/teds/5e891a4e-9195-412a-9f02-135f632c15d0/1577555579630.png",
 *       "confirmed": false,
 *       "created_date": "2019-12-17T01:20:56.397Z",
 *       "active": true,
 *       "amount_fundraising": "100000.00",
 *       "investment_percentage": "0.05",
 *       "return_date": "2022-12-15T03:00:00.000Z",
 *       "id_building": "a8bf6952-f81d-425b-9c84-478a55829027",
 *       "cnpj_building": "34096667000188",
 *       "name_building": "Nome da obra",
 *       "vgv_building": "1000000.00",
 *       "final_date_building": "2022-12-15T03:00:00.000Z"
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
export const getPendings = async (request, response) => {
  try {
    const investments = await Investment.findAll({
      where: {
        ted_proof_url: {
          [Sequelize.Op.ne]: null
        },
        status: statuses.investment.PENDING
      },
      include: [
        {
          model: Investor,
          as: 'investor'
        },
        {
          model: Fundraising,
          as: 'fundraising',
          include: [
            {
              model: Building,
              as: 'building'
            }
          ]
        }
      ]
    })

    return response.json(investments)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investment.error.NOT_FOUND)
  }
}

/**
 * @api {post} /investment Create
 * @apiName CreateInvestment
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *      "id_fundraising": "164164dd-2b2c-4bbd-8d06-0d67e7ca242f",
 *      "amount": 1000,
 *      "date": "2019-11-16"
 *   }
 *
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": 4000,
 *      "message": "Investimento criado com sucesso",
 *      "investment": [
 *        {
 *           "id": "5e891a4e-9195-412a-9f02-135f632c15d0",
 *           "id_investor": "a897eacd-2681-4e08-8062-c8f7e174bace",
 *           "id_fundraising": "54b07d12-e847-4158-9569-71fd1bf1da29",
 *           "amount": "1500.00",
 *           "amount_returned": null,
 *           "date": "2019-09-25T03:00:00.000Z",
 *           "ted_proof_url": null,
 *           "confirmed": false,
 *           "created_date": "2019-12-17T01:20:56.397Z",
 *           "active": true
 *        }
 *      ]
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 4502,
 *      "message": "Erro ao tentar criar a investimento",
 *      "errors": "Valor abaixo do mínimo nescessário"
 *   }
 */
export const create = async (request, response) => {
  try {
    const { body, user } = request

    if (user.id_profile === 3) {
      return response.status(500).json(constants.investment.error.ADMIN)
    }

    const investor = await Investor.findByPk(body.id_investor)

    // 1. Validar o investidor
    if (!investor) {
      throw constants.investment.error.INVESTOR_NOT_FOUND
    }

    if (env().BLACK_LIST.includes(investor.cpf) || env().BLACK_LIST.includes(investor.cnpj)) {
      throw constants.investment.error.BLACK_LIST
    }

    // 2. Validar o levantamento de recursos
    const fundraising = await Fundraising.findByPk(body.id_fundraising)

    if (!fundraising || Number(body.amount) < fundraising.investment_min_value) {
      throw constants.investment.error.MIN_VALUE
    }

    // TODO: Adicionar regras validadas no frontend (two-way)

    // 4. Criar o investimento
    body.status = statuses.investment.PENDING

    const investment = await Investment.create(body)

    // 5. Salvar as configurações adotadas
    const terms = {
      id_investor: investor.id,
      id_investment: investment.id,
      ...body.terms
    }

    await RequirementsHistory.create(terms)

    // 6. Enviar e-mail de criação de investimento
    await sendEmail({
      from: `Buildinvest <${env().buildinvest.emails.contact}>`,
      to: investor.email,
      subject: 'Buildinvest - Novo investimento',
      template: 'newInvestment',
      context: {
        buildinvest: {
          bankAccount: env().buildinvest.bankAccount,
          agence: env().buildinvest.agence
        },
        investor,
        investment
      }
    })

    return response.json(Object.assign(constants.investment.success.CREATE, { investment }))
  } catch (err) {
    logger().error(err)

    return response.status(500).json(err.apicode ? err : constants.investment.error.CREATE)
  }
}

/**
 * @api {put} /investment/:id/ted TED Confirmation
 * @apiName TEDConfirmation
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Investment ID
 * @apiParam {file} file Image
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "file": [buffer]
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Comprovante de TED enviado com sucesso",
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Dados da requisição inválidos",
 *      "errors": [{}]
 *   }
 */
export const sendTED = async (request, response) => {
  try {
    const { params, file, user } = request

    if (!file) {
      throw constants.investment.error.NO_TED_FILE
    }

    const url = await uploadFile(file, `teds/${params.id}`, true)

    const where = {
      status: statuses.investment.PENDING
    }

    if (user.id_profile !== 3) {
      where.id_investor = user.investor.id
    }

    const investment = await Investment.findByPk(params.id, { where })

    investment.ted_proof_url = url

    await investment.save()

    return response.json(constants.investment.success.TED_CONFIRMATION)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investment.error.TED_CONFIRMATION)
  }
}

/**
 * @api {put} /investment/confirm Investment Confirmation
 * @apiName InvestmentConfirmation
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParam {array} confirmations Investment IDs
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "investments": ["791c50c6-f1eb-4efe-ba41-315d4e3c5e83", "a788426a-258c-49a5-a905-abec5bba222a"]
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Investimentos confirmados com sucesso",
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Dados da requisição inválidos",
 *      "errors": [{}]
 *   }
 */
export const confirm = async (request, response) => {
  try {
    const { body } = request

    const investment = await Investment.findByPk(body.investments[0])

    investment.status = statuses.investment.CONFIRMED

    await investment.save()

    const fundraising = await Fundraising.findByPk(investment.id_fundraising, {
      include: [
        {
          model: Building,
          as: 'building'
        }
      ]
    })

    const minimum = fundraising.amount * 0.66

    const colleted = await Investment.sum('amount', {
      where: {
        id_fundraising: investment.id_fundraising,
        status: statuses.investment.CONFIRMED
      }
    })

    if (colleted >= minimum) {
      // Não é necessário verificar no schedule se a captação atingiu o mínimo ou o valor esperado.
      // Esta condição já faz a verificação e atualiza o status da captação.
      fundraising.status = statuses.fundraising.CONFIRMED

      const investments = await Investment.findAll({
        where: {
          id_fundraising: fundraising.id
        },
        include: [
          {
            model: Investor,
            as: 'investor'
          }
        ]
      })

      investments.forEach(element => {
        const { investor } = element

        sendEmail({
          from: `Buildinvest <${env().buildinvest.emails.contact}>`,
          to: investor.email,
          subject: 'Buildinvest - Investimento mínimo atingido',
          template: 'fundraising-minimum-reached',
          context: {
            name: investor.name,
            building: fundraising.building.name,
            description: fundraising.building.description,
            collected: minimum
          }
        })
      })
    }

    return response.json(constants.investment.success.CONFIRMATION)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investment.error.CONFIRMATION)
  }
}

/**
 * @api {delete} /investment/:id Cancel
 * @apiName CancelInvestment
 * @apiGroup Investment
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Investment ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Investimento cancelado com sucesso"
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Dados da requisição inválidos",
 *      "errors": [{}]
 *   }
 */
export const cancel = async (request, response) => {
  try {
    const { params, user } = request

    const where = {
      id: params.id
    }

    if (user.id_profile !== 3) {
      where.id_investor = user.investor.id
    }

    const investment = await Investment.findByPk(params.id, {
      where
    })

    if (!investment || investment.ted_proof_url !== null) {
      throw constants.investment.error.INVALID_CANCEL
    }

    investment.status = statuses.investment.CANCELED

    await investment.save()

    response.json(constants.investment.success.CANCEL)
  } catch (err) {
    logger().error(err)

    response.status(500).json(err.apicode ? err : constants.investment.error.CANCEL)
  }
}
