import express from 'express'
import multer from '@core/multer'
import { checkAuth } from '@core/auth'
import * as controller from './controller'

const router = express.Router()
const INVESTIMENT_BASE_PATH = '/investiment'

export default () => {
  router.get(INVESTIMENT_BASE_PATH, checkAuth, controller.getAll)
  router.get(`${INVESTIMENT_BASE_PATH}/:id`, checkAuth, controller.getById)
  router.get(`${INVESTIMENT_BASE_PATH}/investor/:id`, checkAuth, controller.getByInvestorId)
  router.get(`${INVESTIMENT_BASE_PATH}/fundraising/:id`, checkAuth, controller.getByFundraisingId)
  router.get(INVESTIMENT_BASE_PATH, checkAuth, controller.getPendings)
  router.post(INVESTIMENT_BASE_PATH, checkAuth, controller.create)
  // router.put(INVESTIMENT_BASE_PATH, checkAuth, controller.update)
  router.put(`${INVESTIMENT_BASE_PATH}/confirm`, checkAuth, multer.single('file'), controller.tedConfirmation)
  router.put(`${INVESTIMENT_BASE_PATH}/confirm`, checkAuth, controller.confirmation)
  // router.delete(`${INVESTIMENT_BASE_PATH}/:id`, checkAuth, controller.cancel)
  return router
}
