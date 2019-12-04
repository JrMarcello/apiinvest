import express from 'express'
import { checkAuth } from '../../core/middlewares/auth'
import * as controller from './controller'

const router = express.Router()
const FUNDRAISING_BASE_PATH = '/fundraising'

export default () => {
  router.get(FUNDRAISING_BASE_PATH, checkAuth, controller.getAll)
  router.get(`${FUNDRAISING_BASE_PATH}/:id`, checkAuth, controller.getById)
  router.get(`/building/:id${FUNDRAISING_BASE_PATH}`, checkAuth, controller.getByBuildingId)
  // router.get(`${FUNDRAISING_BASE_PATH}/custodian/:id`, checkAuth, controller.getByCustodianId)
  router.post(FUNDRAISING_BASE_PATH, checkAuth, controller.create)
  router.put(FUNDRAISING_BASE_PATH, checkAuth, controller.update)
  router.put(`${FUNDRAISING_BASE_PATH}/:id/finish`, checkAuth, controller.finish)
  router.put(`${FUNDRAISING_BASE_PATH}/:id/cancel`, checkAuth, controller.cancel)

  return router
}
