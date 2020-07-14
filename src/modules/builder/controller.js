import { env, logger } from '../../common/utils'
import { removeFile, uploadFile } from '../../core/storage'
import constants from '../../common/constants'

// Models
const { Builder, BuilderPhone, BuilderPartner, Building } = require('../../database/models')

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
 *        "message": "Erro ao buscar construtora(s)",
 *     }
 */
export const getAll = async (request, response) => {
  try {
    const builders = await Builder.findAll({
      where: {
        active: true
      }
    })

    return response.json(builders)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.builder.error.NOT_FOUND)
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
 *        "location": "params"
 *      }]
 *   }
 */
export const getById = async (request, response) => {
  try {
    const { params } = request

    const builder = await Builder.findByPk(params.id, {
      where: {
        active: true
      },
      include: [
        {
          model: BuilderPhone,
          as: 'phones'
        },
        {
          model: BuilderPartner,
          as: 'partners'
        }
      ]
    })

    return response.json(builder || {})
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.builder.error.NOT_FOUND)
  }
}

/**
 * @api {get} /builder/:id/buildings Get all Buildings (By Builder ID)
 * @apiName GetAllBuildingsByID
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Builder ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [{
 *       "id": "69cb237c-c53a-4619-8433-d80719c0c18f",
 *       "id_builder": "7de6982f-6989-45bd-97d4-973ebeb75295",
 *       "spe": "34096667000199",
 *       "registration": "789456",
 *       "name": "Nome da obra",
 *       "description": "Descrição da obra",
 *       "address_street": "Rua da obraa",
 *       "address_number": "123",
 *       "address_neighborhood": "Bairro",
 *       "address_city": "Cidade",
 *       "address_state": "Estado",
 *       "address_country": "Pais",
 *       "address_cep": "58000000",
 *       "amount": "1000000.00",
 *       "initial_date": "2019-08-27T00:00:00.000Z",
 *       "final_date": "2022-08-27T00:00:00.000Z",
 *       "created_date": "2019-09-24T00:50:58.550Z",
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
export const getAllBuildingsById = async (request, response) => {
  try {
    const { user, params } = request

    // TODO: Refatorar
    const id = user.id_profile === 3 ? params.id : user.builder.id

    const builder = await Builder.findByPk(id, {
      where: {
        active: true
      },
      include: [
        {
          model: Building,
          as: 'buildings'
        }
      ]
    })

    const { buildings } = builder

    return response.json(buildings)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.building.error.NOT_FOUND)
  }
}

/**
 * @api {get} /builder/user/:id Get (By User ID)
 * @apiName GetBuilderByUserId
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id User ID
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
    const { user, params } = request

    // TODO: Refatorar
    const id = user.id_profile === 3 ? params.id : user.id

    const builder = await Builder.findAll({
      where: {
        id_user: id,
        active: true
      }
    })

    return response.json(builder || [])
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.builder.error.NOT_FOUND)
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
    const { user, body } = request

    // TODO: Refatorar
    if (user.id_profile !== 3) {
      body.id_user = user.id
    }

    if (!body.builder || body.builder.length === 0) {
      throw constants.builder.error.REQUIRED
    }

    if (!body.phones || body.phones.length === 0) {
      throw constants.builder.phones.error.REQUIRED
    }

    // 1. Criar a construtora
    const builder = await Builder.create(body.builder)

    // 2. Criar telefones
    let phone
    let promises = []

    for (let index = 0; index < body.phones.length; index += 1) {
      const { number } = body.phones[index]

      phone = {
        id_builder: builder.id,
        number
      }

      promises.push(BuilderPhone.create(phone))
    }

    await Promise.all(promises)

    // 3. Criar sócios
    if (body.partners && body.partners.length !== 0) {
      promises = []

      for (let index = 0; index < body.partners.length; index += 1) {
        const partner = body.partners[index]

        partner.id_builder = builder.id

        promises.push(BuilderPartner.create(partner))
      }

      await Promise.all(promises)
    }

    return response.json(Object.assign(constants.builder.success.CREATE, { builder }))
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.builder.error.CREATE)
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
    const { user, body } = request

    // TODO: Refatorar
    if (user.id_profile !== 3) {
      body.id = user.builder.id
    }

    if (!body || body.length === 0) {
      throw constants.builder.error.INVALID_DATA
    }

    // TODO: Aidiconar verificação de id da construtora
    // if (!body.id) { }

    const builder = await Builder.findByPk(body.id)

    if (builder) {
      // Atualizando apenas as propriedades definidas para atualizar
      Object.keys(body).forEach(key => {
        if (body[key] !== undefined) {
          builder[key] = body[key]
        }
      })

      await builder.save()
    }

    return response.json(constants.builder.success.UPDATE)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.builder.error.UPDATE)
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
    const { user, params } = request

    // TODO: Refatorar
    const id = user.id_profile === 3 ? params.id : user.builder.id

    const builder = await Builder.findByPk(id)

    if (builder) {
      builder.active = false

      await builder.save()
    }

    return response.json(constants.builder.success.REMOVE)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.builder.error.REMOVE)
  }
}

/**
 * @api {put} /builder/:id/logo Set logo
 * @apiName setLogo
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} id Builder ID
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
 *      "code": "S0803",
 *      "message": "Imagem enviada com sucesso",
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": "E0804",
 *      "message": "Erro ao tentar enviar imagem"
 *   }
 */
export const setLogo = async (request, response) => {
  try {
    const { params, file } = request

    // TODO: Aidiconar verificação arquivo enviado
    // if (!file) { }

    const builder = await Builder.findByPk(params.id)

    if (builder && builder.logo_url) {
      const path = builder.logo_url.split(env().GOOGLE_CLOUD.BUCKET).pop()

      await removeFile(path)

      builder.logo_url = null

      await builder.save()
    }

    const url = await uploadFile(file, `logos/${params.id}`, true)

    builder.logo_url = url

    await builder.save()

    return response.json(Object.assign(constants.builder.success.SET_LOGO, { image: url }))
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.builder.error.SET_LOGO)
  }
}

/**
 * @api {delete} /builder/:id/logo Remove logo
 * @apiName removeLogo
 * @apiGroup Builder
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Builder ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0804",
 *      "message": "Imagem removida com sucesso"
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": "E0805",
 *      "message": "Erro ao tentar remover imagem",
 *      "errors": [{
 *        "msg": "Invalid value",
 *        "param": "id",
 *        "location": "body"
 *      }]
 *   }
 */
export const removeLogo = async (request, response) => {
  try {
    const { params } = request

    const builder = await Builder.findByPk(params.id)

    if (builder && builder.logo_url) {
      const path = builder.logo_url.split(env().GOOGLE_CLOUD.BUCKET).pop()

      await removeFile(path)

      builder.logo_url = null

      await builder.save()
    }

    return response.json(Object.assign(constants.builder.success.REMOVE_LOGO))
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.builder.error.REMOVE_LOGO)
  }
}
