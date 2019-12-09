import { logger } from '../../common/utils'
import constants from '../../common/constants'
import * as repository from './repository'

/**
 * @api {get} /building/:idBuilding/image Get Image (By Building ID)
 * @apiName GetBuildingImage
 * @apiGroup Building
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} idBuilding Building ID
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
    response.json(await repository.getByBuildingId(request.params.idBuilding))
  } catch (err) {
    logger().error(err)

    response.status(500).json(err)
  }
}

/**
 * @api {post} /building/:idBuilding/image Add Images
 * @apiName CreateBuilderImage
 * @apiGroup Building
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} idBuilding Building ID
 *
 * @apiParamExample {json} Request-Example:
 *   {
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
 *      "errors": [{}]
 *   }
 */
export const create = async (request, response) => {
  try {
    const images = await repository.create(request.params.idBuilding, request.files)

    response.json(Object.assign(constants.building_image.success.CREATED, { images }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.building_image.error.NOT_CREATED)
  }
}

/**
 * @api {delete} /building/:idBuilding/image Delete Images
 * @apiName DeleteBuilderImages
 * @apiGroup Building
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} idBuilder Builder ID
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
    await repository.remove(request.params.idBuilding, request.body.ids)

    response.json(constants.building_image.success.REMOVED)
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.building_image.error.REMOVED)
  }
}
