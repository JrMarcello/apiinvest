import express from 'express'
import { checkAuth } from '@core/auth'
import * as controller from './controller'

const router = express.Router()
const FUNDRAISING_BASE_PATH = '/fundraising'

export default () => {
  router.get(FUNDRAISING_BASE_PATH, checkAuth, controller.getAll)
  router.get(`${FUNDRAISING_BASE_PATH}/:id`, checkAuth, controller.getById)
  router.get(`${FUNDRAISING_BASE_PATH}/building/:id`, checkAuth, controller.getByBuildingId)
  router.get(`${FUNDRAISING_BASE_PATH}/custodian/:id`, checkAuth, controller.getByCustodianId)
  router.post(FUNDRAISING_BASE_PATH, checkAuth, controller.create)
  router.put(FUNDRAISING_BASE_PATH, checkAuth, controller.update)
  router.delete(`${FUNDRAISING_BASE_PATH}/:id`, checkAuth, controller.remove)

  return router
}
