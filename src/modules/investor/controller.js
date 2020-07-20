import { logger } from '../../common/utils'
import { uploadFile } from '../../core/storage'
import constants from '../../common/constants'

// Models
const {
  Building,
  Fundraising,
  Investment,
  Investor,
  InvestorBankAccount,
  InvestorDocument,
  InvestorPhone,
  Sequelize
} = require('../../database/models')

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
    const investors = await Investor.findAll({
      where: {
        active: true
      }
    })

    return response.json(investors)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investor.error.NOT_FOUND)
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
    const { params } = request

    const investor = await Investor.findByPk(params.id, {
      where: {
        active: true
      }
    })

    return response.json(investor || {})
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investor.error.NOT_FOUND)
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
    const { user, params } = request

    // TODO: Refatorar
    const id = user.id_profile === 3 ? params.id : user.id

    // BDI-14: Necessário obter perfis não concluídos
    // const investor = await Investor.findByPk(id, {
    //     where: {
    //         active: true
    //     }
    // })

    const investor = await Investor.findOne({
      where: {
        id_user: id
      },
      include: [
        {
          model: InvestorPhone,
          as: 'phones'
        },
        {
          model: InvestorBankAccount,
          as: 'accounts'
        }
      ]
    })

    return response.json(investor || {})
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investor.error.NOT_FOUND)
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
    const { user, params } = request

    // TODO: Refatorar
    const id = user.id_profile === 3 ? params.id : user.investor.id

    const investments = await Investment.findAll({
      where: {
        id_investor: id,
        active: true
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

    return response.status(500).json(error.apicode ? error : constants.investor.error.INVESTMENTS_NOT_FOUND)
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
    const { user, params } = request

    // TODO: Refatorar
    const id = user.id_profile === 3 ? params.id : user.investor.id

    const quantity = await Investment.count({
      where: {
        id_investor: id,
        confirmed: true,
        active: true
      }
    })

    return response.json({ count: quantity })
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investor.error.INVESTMENTS_COUNT)
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
    const { user, params } = request

    // TODO: Refatorar
    const id = user.id_profile === 3 ? params.id : user.investor.id

    const amount = await Investment.sum('amount', {
      where: {
        id_investor: id,
        confirmed: true,
        active: true
      }
    })

    return response.json({ amount })
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investor.error.INVESTED_AMOUNT)
  }
}

/**
 * @api {get} /investor/:id/investments/received-amount Get the amount received from Investor
 * @apiName getReceivedAmount
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
export const getReceivedAmount = async (request, response) => {
  try {
    const { user, params } = request

    // TODO: Refatorar
    const id = user.id_profile === 3 ? params.id : user.investor.id

    const amount = await Investment.sum('amount_returned', {
      where: {
        id_investor: id,
        confirmed: true,
        active: true
      }
    })

    return response.json({ amount })
  } catch (err) {
    logger().error(err)

    return response.status(500).json(err.apicode ? err : constants.investor.error.RECEIVED_AMOUNT)
  }
}

/**
 * @api {get} /investor/:id/investments/projected-amount Get the projected amount from Investor
 * @apiName getProjectedAmount
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
export const getProjectedAmount = async (request, response) => {
  try {
    // TODO: Apagar após rever regra
    // response.json(await repository.getProjectedAmount(request.user.id_profile === 3 ? request.params.id : request.user.investor.id))

    const { user, params } = request

    // TODO: Refatorar
    const id = user.id_profile === 3 ? params.id : user.investor.id

    const investor = await Investor.findByPk(id, {
      include: [
        {
          model: Investment,
          as: 'investments'
        }
      ]
    })

    // TODO: Rever regra
    const amount = investor.investments.reduce((sum, investment) => sum + parseFloat(investment.amount), 0)

    return response.json({ amount })
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investor.error.PROJECTED_AMOUNT)
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
    const { user, body, files } = request

    if (!body || body.length === 0 || !body.investor || body.investor.length === 0) {
      throw constants.investor.error.INVALID_DATA
    }

    // DBI-14: Removendo as travas de dados bancários e documentos
    // if (!body.phones || body.phones.length === 0) {
    //     throw constants.investor.phone.error.REQUIRED
    // } else if (!body.accounts || body.accounts.length === 0) {
    //   throw constants.investor.bank_account.error.REQUIRED
    // } else if (!files || files.length !== 3) {
    //   throw constants.investor.document.error.REQUIRED
    // }

    const investor = JSON.parse(body.investor)

    // TODO: Discutir se o e-mail do investidor será obtido do usuário ou através de outro método
    investor.email = user.email

    // BDI-14: O status do investidor só passará a ficar ativo após a conclusão de todas as informações
    if (!body.phones || body.phones.length === 0 || !body.accounts || body.accounts.length === 0 || !files || files.length !== 3) {
      investor.active = false
    }

    const phones = JSON.parse(body.phones)

    // TODO: Refatorar
    if (user.id_profile !== 3) {
      investor.id_user = user.id
    }

    // 1. Criar o investidor
    const result = await Investor.create(investor)

    // 2. Criar os telefones
    let phone
    let promises = []

    phones.forEach(({ number }) => {
      phone = {
        id_investor: result.id,
        number
      }

      promises.push(InvestorPhone.create(phone))
    })

    await Promise.all(promises)

    // 3. Criar as contas bancárias
    let accounts

    if (body.accounts && body.accounts.length > 0) {
      promises = []

      accounts = JSON.parse(body.accounts)

      accounts.forEach(account => {
        account.id_investor = result.id

        promises.push(InvestorBankAccount.create(account))
      })

      await Promise.all(promises)
    }

    // 4. Enviar os documentos
    if (files && files.length === 3) {
      promises = []

      files.forEach(file => {
        promises.push(uploadFile(file, `documents/${result.id}`, true))
      })

      const urls = await Promise.all(promises)

      const documents = []

      for (let index = 0; index < urls.length; index += 1) {
        const url = urls[index]

        documents.push({
          id_investor: result.id,
          url,
          order: index
        })
      }

      await InvestorDocument.bulkCreate(documents)
    }

    return response.json(Object.assign(constants.investor.success.CREATE, { investor: result }))
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investor.error.CREATE)
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
    const { user, body, files } = request

    if (!body || body.length === 0) {
      throw constants.investor.error.INVALID_DATA
    }

    const investor = JSON.parse(body.investor)

    // BDI-14: O status do investidor só passará a ficar ativo após a conclusão de todas as informações
    if (!body.phones || body.phones.length === 0 || !body.accounts || body.accounts.length === 0 || !files || files.length !== 3) {
      investor.active = false
    } else {
      investor.active = true
    }

    const phones = JSON.parse(body.phones)

    // TODO: Refatorar
    if (user.id_profile !== 3) {
      investor.id_user = user.id
    }

    // 1. Atualizar o investidor
    const result = await Investor.findByPk(investor.id, {
      include: [
        {
          model: InvestorPhone,
          as: 'phones'
        }
      ]
    })

    if (result) {
      // Atualizando apenas as propriedades definidas para atualizar
      Object.keys(investor).forEach(key => {
        if (investor[key] !== undefined) {
          result[key] = investor[key]
        }
      })

      await result.save()
    }

    // 2. Criar os telefones
    let promises

    if (phones && phones.length > 0) {
      promises = []

      if (result.phones) {
        const addedPhones = phones.filter(({ number: first }) => !result.phones.some(({ number: second }) => first === second))
        const removedPhones = result.phones.filter(({ number: first }) => !phones.some(({ number: second }) => first === second))

        // 2.1 Adicionando novos telefones
        addedPhones.forEach(phone => {
          phone = {
            id_investor: result.id,
            number: phone.number
          }

          promises.push(InvestorPhone.create(phone))
        })

        await Promise.all(promises)

        // 2.2 Apagando números removidos
        const ids = removedPhones.map(phone => phone.id)

        if (ids.length > 0) {
          await InvestorPhone.destroy({
            where: {
              [Sequelize.Op.and]: {
                id_investor: result.id,
                id: {
                  [Sequelize.Op.or]: ids
                }
              }
            }
          })
        }
      } else {
        phones.forEach(phone => {
          phone = {
            id_investor: result.id,
            number: phone.number
          }

          promises.push(InvestorPhone.create(phone))
        })
      }
    }

    // 3. Atualizar contas bancárias
    let accounts

    if (body.accounts && body.accounts.length > 0) {
      accounts = JSON.parse(body.accounts)

      if (accounts.length > 0) {
        promises = []

        // 3.1 Obter conta atualmente cadastrada
        const account = await InvestorBankAccount.findOne({
          where: {
            id_investor: result.id
          }
        })

        if (account) {
          account.agency = accounts[0].agency
          account.account = accounts[0].account
          account.bank_code = accounts[0].bank_code

          await account.save()
        } else {
          accounts[0].id_investor = result.id

          await InvestorBankAccount.create(accounts[0])
        }
      }
    }

    // 4. Enviar os documentos
    if (files && files.length === 3) {
      promises = []

      files.forEach(file => {
        promises.push(uploadFile(file, `documents/${result.id}`, true))
      })

      const urls = await Promise.all(promises)

      const documents = []

      for (let index = 0; index < urls.length; index += 1) {
        const url = urls[index]

        documents.push({
          id_investor: result.id,
          url,
          order: index
        })
      }

      await InvestorDocument.bulkCreate(documents)
    }

    return response.json(Object.assign(constants.investor.success.UPDATE, { investor: result }))
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investor.error.UPDATE)
  }
}
