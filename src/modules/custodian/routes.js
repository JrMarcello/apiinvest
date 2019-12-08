import express from 'express'
import validations from './validations'
import * as controller from './controller'

const router = express.Router()
const CUSTODIAN_BASE_PAH = '/custodian'

export default () => {
  router.get(CUSTODIAN_BASE_PAH, validations.getAll, controller.getAll)
  router.get(`${CUSTODIAN_BASE_PAH}/:id`, validations.getById, controller.getById)
  router.post(CUSTODIAN_BASE_PAH, validations.create, controller.create)
  router.put(CUSTODIAN_BASE_PAH, validations.update, controller.update)
  router.delete(`${CUSTODIAN_BASE_PAH}/:id`, validations.remove, controller.remove)

  return router
}
