import express from 'express'
import * as controller from './controller'
import { checkAuth } from '@core/auth'

const router = express.Router()
const CUSTODIAN_BASE_PAH = '/custodian'

export default () => {
  router.get(CUSTODIAN_BASE_PAH, checkAuth, controller.getAll)
  router.get(`${CUSTODIAN_BASE_PAH}/:id`, checkAuth, controller.getById)
  router.post(CUSTODIAN_BASE_PAH, checkAuth, controller.create)
  router.put(CUSTODIAN_BASE_PAH, checkAuth, controller.update)
  router.delete(`${CUSTODIAN_BASE_PAH}/:id`, checkAuth, controller.remove)

  return router
}
