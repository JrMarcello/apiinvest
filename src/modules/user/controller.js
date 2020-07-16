import bcrypt from 'bcrypt'
import crypto from 'crypto'
import moment from 'moment'
import { env, logger } from '../../common/utils'
import { getToken } from '../../core/middlewares/auth'
import { sendEmail } from '../../core/mailer'
import constants from '../../common/constants'

// Models
const { User, Investor, Builder, Profile, Sequelize } = require('../../database/models')

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
  // TODO: Verificar regras do NACL

  try {
    const users = await User.findAll({
      where: {
        active: true
      }
    })

    return response.json(users)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.user.error.NOT_FOUND)
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
    const { params, user } = request

    if (user.id_profile !== 3) {
      params.id = user.id
    }

    const account = await User.findByPk(params.id, {
      where: {
        active: true
      },
      include: [
        {
          model: Investor,
          as: 'investor'
        },
        {
          model: Builder,
          as: 'builder'
        }
      ]
    })

    return response.json(account)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.user.error.NOT_FOUND)
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
    const { body } = request

    let user = await User.findOne({
      where: {
        email: body.email
      }
    })

    if (user) {
      throw constants.user.error.MAIL_EXISTS
    }

    // Caso não seja informado o perfil, por padrão deve ser criada uma conta com perfil de investidor
    if (!body.profile) {
      body.id_profile = 1
    }

    // TODO: Repassar encriptação para um serviço, encapsular
    body.password = bcrypt.hashSync(body.password, 10)

    user = await User.create(body)

    return response.json(Object.assign(constants.user.success.CREATE, { user }))
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.user.error.CREATE)
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
    const { user, body } = request

    // TODO: Refatorar
    if (user.id_profile !== 3) {
      body.id = user.id
    }

    // TODO: Repassar encriptação para um serviço, encapsular
    if (body.password) {
      body.password = bcrypt.hashSync(body.password, 10)
    }

    const account = await User.findByPk(body.id)

    if (account) {
      // Atualizando apenas as propriedades definidas para atualizar
      Object.keys(body).forEach(key => {
        if (body[key] !== undefined) {
          account[key] = body[key]
        }
      })

      await account.save()
    }

    return response.json(constants.user.success.UPDATE)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.user.error.UPDATE)
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
    const { user, params } = request

    // TODO: Refatorar
    const id = user.id_profile === 3 ? params.id : user.builder.id

    const account = await User.findByPk(id)

    if (account) {
      account.active = false

      await account.save()
    }

    return response.json(constants.user.success.REMOVE)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.user.error.REMOVE)
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
    const { body } = request

    const account = await User.findOne({
      where: {
        email: body.email
      },
      include: [
        {
          model: Profile,
          as: 'profile'
        },
        {
          model: Investor,
          as: 'investor'
        }
      ]
    })

    if (!account) {
      throw constants.user.error.INVALID_USER_LOGIN
    }

    const result = bcrypt.compareSync(body.password, account.password)

    if (!result) {
      throw constants.user.error.INVALID_USER_LOGIN
    }

    const token = getToken(account.toJSON())

    return response.json(Object.assign(constants.user.success.LOGIN, { token }))
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.user.error.LOGIN)
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
    const { body } = request

    const account = await User.findOne({
      where: {
        email: body.email
      }
    })

    if (!account) {
      throw constants.user.error.FORGOT_PASSWORD_MAIL
    }

    const token = crypto.randomBytes(20).toString('hex')

    account.reset_token = token
    account.reset_expires = moment().add(1, 'h')

    await account.save()

    await sendEmail({
      from: `Buildinvest <${env().buildinvest.emails.contact}>`,
      to: account.email,
      subject: 'Buildinvest - Nova senha',
      template: 'forgotPassword',
      context: { account, url: `http://${env().CLIENT_BASE_PATH}/resetpassword?t=${token}` }
    })

    response.json(Object.assign(constants.user.success.FORGOT_PASSWORD))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err.apicode ? err : constants.user.error.FORGOT_PASSWORD)
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
    const { body } = request

    const account = await User.findOne({
      where: {
        reset_token: body.token
      }
    })

    if (!account) {
      throw constants.user.error.RESET_PASSWORD_TOKEN
    }

    const expired = moment().isAfter(account.reset_expires)

    if (expired) {
      throw constants.user.error.RESET_PASSWORD_EXPIRES
    }

    account.passsword = body.password
    account.reset_token = null
    account.reset_expires = null

    await account.save()

    await sendEmail({
      from: `Buildinvest <${env().buildinvest.emails.contact}>`,
      to: account.email,
      subject: 'Buildinvest - Nova senha',
      template: 'resetPassword',
      context: { account }
    })

    return response.json(constants.user.success.RESET_PASSWORD)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.user.error.RESET_PASSWORD)
  }
}

/**
 * @api {get} /user/profiles Get all profiles
 * @apiName GetUsers
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      [
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
export const getProfiles = async (request, response) => {
  try {
    const profiles = await Profile.findAll({
      where: {
        active: true,
        name: {
          [Sequelize.Op.not]: 'Admin'
        }
      }
    })

    return response.json(profiles)
  } catch (error) {
    logger().error(error)
    return response.status(500).json(error.apicode ? error : constants.user.error.NOT_FOUND)
  }
}
