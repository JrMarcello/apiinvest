import express from 'express'
import { checkAuth } from '@core/auth'
import * as controller from './controller'

const router = express.Router()
const INVESTIMENT_BASE_PATH = '/investiment'

export default () => {
  router.get(INVESTIMENT_BASE_PATH, checkAuth, controller.getAll)
  router.get(`${INVESTIMENT_BASE_PATH}/:id`, checkAuth, controller.getById)
  router.get(`${INVESTIMENT_BASE_PATH}/investor/:id`, checkAuth, controller.getByInvestorId)
  router.get(`${INVESTIMENT_BASE_PATH}/fundraising/:id`, checkAuth, controller.getByFundraisingId)
  router.post(INVESTIMENT_BASE_PATH, checkAuth, controller.create)
  router.put(INVESTIMENT_BASE_PATH, checkAuth, controller.update)
  router.delete(`${INVESTIMENT_BASE_PATH}/:id`, checkAuth, controller.remove)

  return router
}
