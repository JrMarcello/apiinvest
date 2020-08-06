import { logger } from '../../common/utils'
import { uploadFile } from '../../core/storage'
import constants from '../../common/constants'
import statuses from '../../common/statuses'

// Models
const { Document } = require('../../database/models')

/**
 * @api {get} /investor/:idInvestor/documents Get Documents (By Investor ID)
 * @apiName GetInvestorDocuments
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} idInvestor Investor ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   [
 *      {
 *         "id": 1,
 *         "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *         "url": "https://storage.googleapis.com/buildinvest/documents/545121513535151311.png"
 *         "order": 1
 *      },
 *      {
 *         "id": 2,
 *         "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *         "url": "https://storage.googleapis.com/buildinvest/documents/545121513535151312.png"
 *         "order": 2
 *      },
 *      {
 *         "id": 3,
 *         "id_investor": "35bd3682-0a9f-42fa-a98e-24cba9e78729",
 *         "url": "https://storage.googleapis.com/buildinvest/documents/545121513535151313.png"
 *         "order": 3
 *      }
 *   ]
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
export const getByInvestorId = async (request, response) => {
  try {
    const { params } = request

    const documents = await Document.findAll({
      where: {
        reference_id: params.idInvestor,
        reference_entity: 'investor'
      }
    })

    return response.json(documents)
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investor.document.error.NOT_FOUND)
  }
}

/**
 * @api {post} /investor/:id/documents Create Documents
 * @apiName CreateDocuments
 * @apiGroup Investor
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "docs": [[buffer], [buffer], [buffer]]
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Documentos eviados com sucesso"
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

    files.forEach(file => {
      promises.push(uploadFile(file, `documents/${params.idInvestor}`, true))
    })

    const urls = await Promise.all(promises)

    let documents = []

    // A ordem das promisses não é alterada
    urls.forEach((url, index) => {
      let type

      if (files[index].mimetype === 'application/pdf') {
        type = statuses.document.PDF
      } else if (files[index].mimetype.includes('image')) {
        type = statuses.document.IMAGE
      }

      documents.push({
        name: files[index].originalname,
        reference_id: params.idInvestor,
        reference_entity: 'investor',
        type,
        url
      })
    })

    documents = await Document.bulkCreate(documents)

    return response.json(Object.assign(constants.investor.document.success.CREATE, { documents }))
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investor.document.error.CREATE)
  }
}
