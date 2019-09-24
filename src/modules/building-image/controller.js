import { logger } from '@common/utils'
import constants from '@common/constants'
import * as repository from './repository'

/**
 * @api {get} /building/:id/image Get Image (By Building ID)
 * @apiName GetBuildingImage
 * @apiGroup Building
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Building ID
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": "eb76cd10-367b-447d-b238-fa8e9eef2a1f"
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "id": "1234560",
 *      "id_building": "eb76cd10-367b-447d-b238-fa8e9eef2a1f",
 *      "url": "https://storage.googleapis.com/buildinvest/building/545121513535151311.png"
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
export const getByBuildingId = async (request, response) => {
  try {
    response.json(await repository.getByBuildingId(request.params.id))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

/**
 * @api {post} /building/image Create Image
 * @apiName CreateBuilderImage
 * @apiGroup Building
 * @apiVersion 1.0.0
 *
 * @apiParam {string} params Builder iamge params em breve aqui
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id_building": "eb76cd10-367b-447d-b238-fa8e9eef2a1f",
 *      "images": [[image buffer], [image buffer]]
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Imagens enviadas com sucesso"
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
    const images = await repository.create({ id_building: request.body.id_building, files: request.files })

    response.json(Object.assign(constants.building_image.success.CREATED, { images }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.building_image.error.NOT_CREATED)
  }
}

/**
 * @api {delete} /building/image/:id Delete Image
 * @apiName DeleteBuilderImage
 * @apiGroup Building
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id": eb76cd10-367b-447d-b238-fa8e9eef2a1f
 *   }
 *
 * @apiParam {uuid} ID Builder Phone ID
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Imagens deletadas com sucesso"
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

    response.json(constants.building_image.success.REMOVED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.building_image.error.NOT_REMOVED)
  }
}
