import { logger } from '../../common/utils'
import constants from '../../common/constants'
import * as repository from './repository'

/**
 * @api {get} /user Get all
 * @apiName GetUsers
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      [
 *         {
 *            "id": "647ac188-62c8-4618-8a0a-be14174aac49",
 *            "id_profile": 3,
 *            "email": "buildinvest@admin.com",
 *            "username": "Buildinvest Admin",
 *            "password": "$2b$10$o8Av/20hYJX3IKRRUKK5UO/bfjWIbYTIpLc6dtlvnk8NrTxTdf9r2",
 *            "avatar_url": null,
 *            "create_date": "2019-09-08T18:12:22.205Z",
 *            "active": true
 *         },
 *         {
 *            "id": "eb76cd10-367b-447d-b238-fa8e9eef2a1f",
 *            "id_profile": 1,
 *            "email": "marcello@mail.com",
 *            "username": "Marcello Jr",
 *            "password": "$2b$10$qnkfSsxQEjdTW0CHGw1z0eR/vko.vhJrqpq.xeb/T0nR4R55VpNy.",
 *            "avatar_url": null,
 *            "create_date": "2019-09-14T19:25:26.560Z",
 *            "active": true
 *         }
 *      ]
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
    if (request.user.id_profile === 3) return response.json(await repository.getAll(request.params))

    return response.status(403).json({
      status: 'Acesso negado!',
      success: false,
      message: 'Você não está autorizado a acessar esse recurso'
    })
  } catch (err) {
    logger().error(err)

    return response.status(500).json(constants.user.error.NOT_FOUND)
  }
}

/**
 * @api {get} /user/:id Get (By ID)
 * @apiName GetUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID User ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Usuário criado com sucesso",
 *      "user": {
 *        "id": "eb76cd10-367b-447d-b238-fa8e9eef2a1f",
 *        "id_profile": 1,
 *        "email": "marcello@mail.com",
 *        "username": "Marcello Jr",
 *        "password": "$2b$10$qnkfSsxQEjdTW0CHGw1z0eR/vko.vhJrqpq.xeb/T0nR4R55VpNy.",
 *        "avatar_url": null,
 *        "create_date": "2019-09-14T19:25:26.560Z",
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
 *        "param": "id",
 *        "location": "body"
 *      }]
 *   }
 */
export const getById = async (request, response) => {
  try {
    response.json(await repository.getById(request.user.id_profile === 3 ? request.params.id : request.user.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.user.error.NOT_FOUND)
  }
}

/**
 * @api {post} /user Create
 * @apiName CreateUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {string} email User email
 * @apiParam {string} username User usermane
 * @apiParam {string} passwaord User password
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "email": "marcello@mail.com",
 *      "username": "Marcello Jr",
 *      "password": "123456"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Usuário criado com sucesso",
 *      "user": [{
 *        "id": "eb76cd10-367b-447d-b238-fa8e9eef2a1f",
 *        "id_profile": 1,
 *        "email": "marcello@mail.com",
 *        "username": "Marcello Jr",
 *        "password": "$2b$10$qnkfSsxQEjdTW0CHGw1z0eR/vko.vhJrqpq.xeb/T0nR4R55VpNy.",
 *        "avatar_url": null,
 *        "create_date": "2019-09-14T19:25:26.560Z",
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
 *        "param": "email",
 *        "location": "body"
 *      }]
 *   }
 */
export const create = async (request, response) => {
  try {
    const user = await repository.create(request.body)

    response.json(Object.assign(constants.user.success.CREATE, { user }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

/**
 * @api {put} /user Update
 * @apiName UpdateUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {string} email User email
 * @apiParam {string} username User username
 * @apiParam {string} passwaord User password
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "email": "marcello@mail.com",
 *      "username": "Marcello Jr",
 *      "password": "123456"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Usuário atualizado com sucesso"
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Dados da requisição inválidos",
 *      "errors": [{
 *        "msg": "Invalid value",
 *        "param": "email",
 *        "location": "body"
 *      }]
 *   }
 */
export const update = async (request, response) => {
  try {
    if (request.user.id_profile !== 3) request.body.id = request.user.id

    await repository.update(request.body)

    response.json(constants.user.success.UPDATE)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.user.error.UPDATE)
  }
}

/**
 * @api {delete} /user/:id Delete
 * @apiName DeleteUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": eb76cd10-367b-447d-b238-fa8e9eef2a1f
 *   }
 *
 * @apiParam {uuid} ID User ID
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Usuário deletado com sucesso"
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
    await repository.remove(request.user.id_profile === 3 ? request.params.id : request.user.id)

    response.json(constants.user.success.REMOVE)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.user.error.REMOVE)
  }
}

/**
 * @api {post} /user/login Login
 * @apiName LoginUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {string} email User email
 * @apiParam {string} password User password
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "email": "marcello@mail.com",
 *      "password": "123456"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0003",
 *      "message": "Usuario logado",
 *      "token": "eyJhbGciOiJIUzI1NiIsIdkadjJHJHKkjnbajbHBNAIKGMA"
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 2505,
 *      "message": "Email ou senha inválido"
 *   }
 */
export const login = async (request, response) => {
  try {
    const token = await repository.login(request.body)

    response.json(Object.assign(constants.user.success.LOGIN, { token }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

/**
 * @api {post} /user/forgotpassword Forgot Password
 * @apiName ForgotPassword
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {string} email User email
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "email": "marcello@mail.com"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0204",
 *      "message": "Email enviado"
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": E0206,
 *      "message": "Erro ao enviar email"
 *   }
 */
export const forgotPassword = async (request, response) => {
  try {
    await repository.forgotPassword(request.body.email)

    response.json(Object.assign(constants.user.success.FORGOT_PASSWORD))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

/**
 * @api {post} /user/resetpassword Reset Password
 * @apiName ResetPassword
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {string} token Token
 * @apiParam {string} password User new password
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "token": "81ab4ce330cf6be658ffb218b5a5aebf58d21cf5",
 *      "password": "123456"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0205",
 *      "message": "Senha redefinida com sucesso"
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": E0208,
 *      "message": "Erro ao redefinir senha"
 *   }
 */
export const resetPassword = async (request, response) => {
  try {
    await repository.resetPassword(request.body)

    response.json(Object.assign(constants.user.success.RESET_PASSWORD))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}
