import { logger } from '@common/utils'
import constants from '@common/constants'
import * as repository from './repository'

/**
 * @api {get} /building Get all
 * @apiName GetBuildings
 * @apiGroup Building
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      [
 *
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
    response.json(await repository.getAll(request.params))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err.message)
  }
}

/**
 * @api {get} /building/:id Get (By ID)
 * @apiName GetBuilding
 * @apiGroup Building
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Building ID
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": eb76cd10-367b-447d-b238-fa8e9eef2a1f
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *
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
    response.json(await repository.getById(request.params.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

/**
 * @api {get} /building/builder/:id Get (By Builder ID)
 * @apiName GetBuildingByBuilderId
 * @apiGroup Building
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Builder ID
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": eb76cd10-367b-447d-b238-fa8e9eef2a1f
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *
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
export const getByBuilderId = async (request, response) => {
  try {
    response.json(await repository.getByBuilderId(request.params.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

/**
 * @api {post} /building Create
 * @apiName CreateBuilding
 * @apiGroup Building
 * @apiVersion 1.0.0
 *
 * @apiParam {string} params Building params em breve aqui
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Obra criada com sucesso",
 *      "builder": [{}]
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Dados da requisição inválidos",
 *      "errors": [{
 *        "msg": "Invalid value",
 *        "param": "spe",
 *        "location": "body"
 *      }]
 *   }
 */
export const create = async (request, response) => {
  try {
    const building = await repository.create(request.body)

    response.json(Object.assign(constants.building.success.CREATED, { building }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.building.error.NOT_CREATED)
  }
}

/**
 * @api {put} /building Update
 * @apiName UpdateBuilding
 * @apiGroup Building
 * @apiVersion 1.0.0
 *
 * @apiParam {string} params Building params em breve
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Obra atualizada com sucesso",
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "code": 9999,
 *      "message": "Dados da requisição inválidos",
 *      "errors": [{
 *        "msg": "Invalid value",
 *        "param": "spe",
 *        "location": "body"
 *      }]
 *   }
 */
export const update = async (request, response) => {
  try {
    await repository.update(request.body)

    response.json(constants.building.success.UPDATED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.building.error.NOT_UPDATED)
  }
}

/**
 * @api {delete} /building/:id Delete
 * @apiName DeleteBuilding
 * @apiGroup Building
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": eb76cd10-367b-447d-b238-fa8e9eef2a1f
 *   }
 *
 * @apiParam {uuid} ID Building ID
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Obra deletada com sucesso"
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
    await repository.remove(request.params.id)

    response.json(constants.building.success.REMOVED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.building.error.NOT_REMOVED)
  }
}
