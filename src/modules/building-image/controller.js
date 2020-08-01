import { logger } from '../../common/utils'
import { removeFiles, uploadFile } from '../../core/storage'
import constants from '../../common/constants'

// Models
const { BuildingImage, Sequelize } = require('../../database/models')

/**
 * @api {get} /building/:idBuilding/images Get Image (By Building ID)
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
    const { params } = request

    const images = await BuildingImage.findAll({
      where: {
        id_building: params.idBuilding
      }
    })

    return response.json(images)
  } catch (err) {
    logger().error(err)

    return response.status(500).json(err.apicode ? err : constants.building.images.error.NOT_FOUND)
  }
}

/**
 * @api {post} /building/:idBuilding/images Add Images
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
    const { params, files } = request

    const promises = []

    for (let index = 0; index < files.length; index += 1) {
      const file = files[index]

      promises.push(uploadFile(file, `buildings/${params.idBuilding}`, true))
    }

    const urls = await Promise.all(promises)

    let images = []

    for (let index = 0; index < urls.length; index += 1) {
      const url = urls[index]

      images.push({
        id_building: params.idBuilding,
        url
      })
    }

    images = await BuildingImage.bulkCreate(images)

    return response.json(Object.assign(constants.building.images.success.CREATE, { images }))
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.building.images.error.CREATE)
  }
}

/**
 * @api {delete} /building/:idBuilding/images Delete Images
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
    const { params, body } = request

    const images = await BuildingImage.findAll({
      where: {
        [Sequelize.Op.and]: {
          id_building: params.idBuilding,
          id: {
            [Sequelize.Op.or]: body.ids
          }
        }
      }
    })

    if (images && images.length > 0) {
      await removeFiles(images)
      await BuildingImage.destroy({
        where: {
          [Sequelize.Op.and]: {
            id_building: params.idBuilding,
            id: {
              [Sequelize.Op.or]: body.ids
            }
          }
        }
      })
    }

    return response.json(constants.building.images.success.REMOVE)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.building.images.error.REMOVE)
  }
}
