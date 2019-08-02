import express from 'express'
import * as controller from './controller'

const router = express.Router()
const CUSTODIAN_BASE_PAH = '/custodian'

export default () => {
  router.get(CUSTODIAN_BASE_PAH, validator.getAll(), controller.getAll)
  router.get(`${CUSTODIAN_BASE_PAH}/:id`, validator.getById(), controller.getById)
  router.post(CUSTODIAN_BASE_PAH, validator.create(), controller.create)
  router.put(CUSTODIAN_BASE_PAH, validator.update(), controller.update)
  router.delete(`${CUSTODIAN_BASE_PAH}/:id`, validator.remove(), controller.remove)

  return router
}
