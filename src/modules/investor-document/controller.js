import { logger } from '../../common/utils'
import { getSignedUrl, uploadFile } from '../../core/storage'
import constants from '../../common/constants'
// Models
const { InvestorDocument } = require('../../database/models')

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
  if (request.user.id_profile !== 3) {
    const body = {
      status: 'Acesso negado',
      success: false,
      message: 'Você não está autorizado a acessar este recurso.'
    }

    return response.status(403).json(body)
  }

  try {
    const { params } = request

    const documents = await InvestorDocument.findAll({
      where: {
        id_investor: params.idInvestor
      }
    })

    if (documents && documents.length > 0) {
      const promises = []

      for (let index = 0; index < documents.length; index += 1) {
        const { url } = documents[index]

        // TODO: Investigar o motivo de não salvar a url pronta da imagem
        // uploadFile(file, path, true)
        promises.push(getSignedUrl(url))
      }

      // A ordem do resultado das promises é preservada de acordo com a entrada
      const urls = await Promise.all(promises)

      for (let index = 0; index < documents.length; index += 1) {
        documents[index].url = urls[index]
      }
    }

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

    // TODO: Aidiconar verificação arquivo enviado
    // if (!images) { }

    const promises = []

    for (let index = 0; index < files.length; index += 1) {
      const file = files[index]

      // TODO: Investigar o motivo de não salvar a url pronta da imagem
      // uploadFile(file, path, true)
      promises.push(uploadFile(file, `documents/${params.idInvestor}`))
    }

    const urls = await Promise.all(promises)

    let documents = []

    for (let index = 0; index < urls.length; index += 1) {
      const url = urls[index]

      documents.push({
        id_investor: params.idInvestor,
        url,
        order: index
      })
    }

    documents = await InvestorDocument.bulkCreate(documents)

    return response.json(Object.assign(constants.investor.document.success.CREATE, { documents }))
  } catch (error) {
    logger().error(error)

    return response.status(500).json(error.apicode ? error : constants.investor.document.error.CREATE)
  }
}
