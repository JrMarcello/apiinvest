import { logger } from '../../common/utils'
import constants from '../../common/constants'
import * as repository from './repository'

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
    if (request.user.id_profile === 3) return response.json(await repository.getByInvestorId(request.params.idInvestor))

    return response.status(403).json({
      status: 'Acesso negado!',
      success: false,
      message: 'Você não está autorizado a acessar esse recurso'
    })
  } catch (err) {
    logger().error(err)

    return response.status(500).json(err)
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
    const documents = await repository.create(
      request.user.id_profile === 3 ? request.params.idInvestor : request.user.investor.id,
      request.files
    )

    response.json(Object.assign(constants.investor_document.success.CREATED, { documents }))
  } catch (err) {
    logger().error(err)

    response.status(500).json(constants.investor_document.error.NOT_CREATED)
  }
}
