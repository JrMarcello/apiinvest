import express from 'express'
import multer from '@core/multer'
import { checkAuth } from '@core/middlewares/auth'
import * as controller from './controller'

const router = express.Router()
const INVESTIMENT_BASE_PATH = '/investment'

export default () => {
  router.get(INVESTIMENT_BASE_PATH, checkAuth, controller.getAll)
  router.get(`${INVESTIMENT_BASE_PATH}/pending`, checkAuth, controller.getPendings)
  router.get(`${INVESTIMENT_BASE_PATH}/investor/:id`, checkAuth, controller.getByInvestorId)
  router.get(`${INVESTIMENT_BASE_PATH}/fundraising/:id`, checkAuth, controller.getByFundraisingId)
  router.get(`${INVESTIMENT_BASE_PATH}/:id`, checkAuth, controller.getById)
  router.post(INVESTIMENT_BASE_PATH, checkAuth, controller.create)
  router.put(`${INVESTIMENT_BASE_PATH}/ted`, checkAuth, multer.single('file'), controller.tedConfirmation)
  router.put(`${INVESTIMENT_BASE_PATH}/confirm`, checkAuth, controller.confirm)
  router.put(`${INVESTIMENT_BASE_PATH}/:id/cancel`, checkAuth, controller.cancel)

  return router
}
