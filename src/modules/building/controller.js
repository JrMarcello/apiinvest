import { logger } from '../../common/utils'
import { uploadFile } from '../../core/storage'
import constants from '../../common/constants'
import statuses from '../../common/statuses'

// Models
const { BankAccount, Building, BuildingDetail, Custodian, Document, Fundraising, Investment, Investor, Sequelize } = require('../../database/models')

/**
 * @api {get} /building Get all
 * @apiName GetBuildings
 * @apiGroup Building
 * @apiVersion 1.0.0
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
 *        "errors": [{}]
 *     }
 */
export const getAll = async (request, response) => {
    try {
        const buildings = await Building.findAll({
            where: {
                active: true
            },
            include: [
                {
                    model: Document,
                    as: 'documents',
                    required: false,
                    where: {
                        reference_entity: 'building'
                    }
                }
            ]
        })

        return response.json(buildings)
    } catch (error) {
        logger().error(error)

        return response.status(500).json(error.apicode ? error : constants.building.error.NOT_FOUND)
    }
}

/**
 * @api {get} /building/avaliables Get avaliables
 * @apiName GetAvaliablesBuildings
 * @apiGroup Building
 * @apiVersion 1.0.0
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
 *        "errors": [{}]
 *     }
 */
export const getAllAvaliables = async (request, response) => {
    try {
        // Query original
        // SELECT b.* FROM ${table} b JOIN fundraising f ON (b.id = f.id_building AND f.active AND f.finished = false) WHERE b.active

        const status = [statuses.fundraising.OPENED, statuses.fundraising.CONFIRMED, statuses.fundraising.SETTLED]

        const buildings = await Building.findAll({
            where: {
                active: true
            },
            include: [
                {
                    model: Document,
                    as: 'documents',
                    required: false,
                    where: {
                        reference_entity: 'building'
                    }
                },
                {
                    model: Fundraising,
                    as: 'fundraisings',
                    where: {
                        status: {
                            [Sequelize.Op.or]: status
                        }
                    }
                }
            ]
        })

        return response.json(buildings)
    } catch (err) {
        logger().error(err)

        return response.status(500).json(err.apicode ? err : constants.building.error.NOT_FOUND)
    }
}

/**
 * @api {get} /building/:id Get (By ID)
 * @apiName GetBuilding
 * @apiGroup Building
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Building ID
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "id": "69cb237c-c53a-4619-8433-d80719c0c18f",
 *      "id_builder": "7de6982f-6989-45bd-97d4-973ebeb75295",
 *      "spe": "34096667000199",
 *      "registration": "789456",
 *      "name": "Nome da obra",
 *      "description": "Descrição da obra",
 *      "address_street": "Rua da obraa",
 *      "address_number": "123",
 *      "address_neighborhood": "Bairro",
 *      "address_city": "Cidade",
 *      "address_state": "Estado",
 *      "address_country": "Pais",
 *      "address_cep": "58000000",
 *      "amount": "1000000.00",
 *      "initial_date": "2019-08-27T00:00:00.000Z",
 *      "final_date": "2022-08-27T00:00:00.000Z",
 *      "created_date": "2019-09-24T00:50:58.550Z",
 *      "active": true,
 *      "images": [],
 *      "fundraisings": []
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
        const { params } = request

        const building = await Building.findByPk(params.id, {
            where: {
                active: true
            },
            include: [
                {
                    model: Document,
                    as: 'documents',
                    required: false,
                    where: {
                        reference_entity: 'building'
                    }
                },
                {
                    model: BuildingDetail,
                    as: 'details',
                    required: false
                },
                {
                    model: Fundraising,
                    as: 'fundraisings',
                    include: [
                        {
                            model: Investment,
                            as: 'investments',
                            include: [
                                {
                                    model: Investor,
                                    as: 'investor'
                                }
                            ]
                        },
                        {
                            model: Custodian,
                            as: 'custodian',
                            include: [
                                {
                                    model: BankAccount,
                                    as: 'account'
                                }
                            ]
                        }
                    ]
                }
            ]
        })

        return response.json(building || {})
    } catch (error) {
        logger().error(error)

        return response.status(500).json(error.apicode ? error : constants.building.error.NOT_FOUND)
    }
}

/**
 * @api {get} /building/builder/:id Get all (By Builder ID)
 * @apiName GetBuildingByBuilderId
 * @apiGroup Building
 * @apiVersion 1.0.0
 *
 * @apiParam {uuid} ID Builder ID
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
        const { params } = request

        const buildings = await Building.findAll({
            where: {
                id_builder: params.id,
                active: true
            }
        })

        return response.json(buildings)
    } catch (error) {
        logger().error(error)

        return response.status(500).json(error.apicode ? error : constants.building.error.NOT_FOUND)
    }
}

/**
 * @api {post} /building Create
 * @apiName CreateBuilding
 * @apiGroup Building
 * @apiVersion 1.0.0
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *      "id_builder": "7de6982f-6989-45bd-97d4-973ebeb75295",
 *      "spe": "34096667000199",
 *      "registration": "789456",
 *      "name": "Nome da obra",
 *      "description": "Descrição da obra",
 *      "address_street": "Rua da obraa",
 *      "address_number": "123",
 *      "address_neighborhood": "Bairro",
 *      "address_city": "Cidade",
 *      "address_state": "Estado",
 *      "address_country": "Pais",
 *      "address_cep": "58000000",
 *      "amount": "1000000.00",
 *      "initial_date": "2019-08-27T00:00:00.000Z",
 *      "final_date": "2022-08-27T00:00:00.000Z",
 *      "created_date": "2019-09-24T00:50:58.550Z",
 *      "active": true
 *   }
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "code": "S0000",
 *      "message": "Obra criada com sucesso",
 *      "builder": [{
 *        "code": 6000,
 *        "message": "Obra criada com sucesso",
 *        "building": {
 *          "id": "69cb237c-c53a-4619-8433-d80719c0c18f",
 *          "id_builder": "7de6982f-6989-45bd-97d4-973ebeb75295",
 *          "cnpj": "34096667000199",
 *          "registration": "789456",
 *          "name": "Nome da obra",
 *          "description": "Descrição da obra",
 *          "address_street": "Rua da obraa",
 *          "address_number": "123",
 *          "address_neighborhood": "Bairro",
 *          "address_city": "Cidade",
 *          "address_state": "Estado",
 *          "address_country": "Pais",
 *          "address_cep": "58000000",
 *          "vgv": "1000000.00",
 *          "initial_date": "2019-08-27T00:00:00.000Z",
 *          "final_date": "2022-08-27T00:00:00.000Z",
 *          "created_date": "2019-09-24T00:50:58.550Z",
 *          "active": true
 *        }
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
 *        "param": "spe",
 *        "location": "body"
 *      }]
 *   }
 */
export const create = async (request, response) => {
    try {
        const { files } = request
        let { body } = request

        body = JSON.parse(body.building)

        const building = await Building.create(body)

        if (files && files.length > 0) {
            const promises = []

            files.forEach(file => {
                promises.push(uploadFile(file, `buildings/${building.id}`, true))
            })

            const urls = await Promise.all(promises)

            const documents = []

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
                    reference_id: building.id,
                    reference_entity: 'building',
                    type,
                    url
                })
            })

            await Document.bulkCreate(documents)
        }

        return response.json(Object.assign(constants.building.success.CREATE, { building }))
    } catch (error) {
        logger().error(error)

        return response.status(500).json(error.apicode ? error : constants.building.error.CREATE)
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
 *      "id": "69cb237c-c53a-4619-8433-d80719c0c18f",
 *      "id_builder": "7de6982f-6989-45bd-97d4-973ebeb75295",
 *      "spe": "34096667000199",
 *      "registration": "789456",
 *      "name": "Nome da obra",
 *      "description": "Descrição da obra",
 *      "address_street": "Rua da obraa",
 *      "address_number": "123",
 *      "address_neighborhood": "Bairro",
 *      "address_city": "Cidade",
 *      "address_state": "Estado",
 *      "address_country": "Pais",
 *      "address_cep": "58000000",
 *      "amount": "1000000.00",
 *      "initial_date": "2019-08-27T00:00:00.000Z",
 *      "final_date": "2022-08-27T00:00:00.000Z",
 *      "created_date": "2019-09-24T00:50:58.550Z",
 *      "active": true
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
        const { body } = request

        if (!body || body.length === 0) {
            throw constants.building.error.INVALID_DATA
        }

        const building = await Building.findByPk(body.id)

        if (building) {
            // Atualizando apenas as propriedades definidas para atualizar
            Object.keys(body).forEach(key => {
                if (body[key] !== undefined) {
                    building[key] = body[key]
                }
            })

            await building.save()
        }

        return response.json(constants.building.success.UPDATE)
    } catch (error) {
        logger().error(error)

        return response.status(500).json(error.apicode ? error : constants.building.error.UPDATE)
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
        const { params } = request

        const building = await Building.findByPk(params.id)

        if (building) {
            building.active = false

            await building.save()
        }

        return response.json(constants.building.success.REMOVE)
    } catch (error) {
        logger().error(error)

        return response.status(500).json(error.apicode ? error : constants.building.error.REMOVE)
    }
}

export const getAllDetails = async (request, response) => {
    try {
        const { params } = request

        const details = await BuildingDetail.findAll({ where: { id_building: params.id } })

        return response.json(details)
    } catch (error) {
        logger().error(error)

        return response.status(500).json(error.apicode ? error : constants.building.error.NOT_FOUND)
    }
}

export const getDetail = async (request, response) => {
    try {
        const { params } = request

        const detail = await BuildingDetail.findByPk(params.detailId)

        return response.json(detail)
    } catch (error) {
        logger().error(error)

        return response.status(500).json(error.apicode ? error : constants.building.error.NOT_FOUND)
    }
}

export const addDetail = async (request, response) => {

    try {
        let { body, params } = request

        body.id_building = params.id

        const detail = await BuildingDetail.create(body)

        return response.json(Object.assign(constants.building.success.CREATE, { detail }))
    } catch (error) {
        logger().error(error)

        return response.status(500).json(error.apicode ? error : constants.building.error.CREATE)
    }

}
export const updateDetail = async (request, response) => {
    try {
        const { body, params } = request

        const detail = await BuildingDetail.findByPk(params.detailId)

        if (detail) {
            // Atualizando apenas as propriedades definidas para atualizar
            Object.keys(body).forEach(key => {
                if (body[key] !== undefined) {
                    detail[key] = body[key]
                }
            })

            await detail.save()
        }

        return response.json(constants.building.success.UPDATE)
    } catch (error) {
        logger().error(error)

        return response.status(500).json(error.apicode ? error : constants.building.error.UPDATE)
    }
}

export const removeDetail = async (request, response) => {
    try {
        const { params } = request

        BuildingDetail.destroy({
            where: {
                id: params.detailId
            }
        })

        return response.json(constants.building.success.REMOVE)
    } catch (error) {
        logger().error(error)

        return response.status(500).json(error.apicode ? error : constants.building.error.REMOVE)
    }
}