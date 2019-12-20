import express from 'express'
import multer from '../../core/multer'
import validations from './validations'
import * as controller from './controller'

const router = express.Router()
const INVESTIMENT_BASE_PATH = '/investment'

export default () => {
  router.get(INVESTIMENT_BASE_PATH, validations.getAll, controller.getAll)
  router.get(`${INVESTIMENT_BASE_PATH}/pendings`, validations.getPendings, controller.getPendings)
  router.get(`${INVESTIMENT_BASE_PATH}/investor/:id`, validations.getByInvestorId, controller.getByInvestorId)
  router.get(`${INVESTIMENT_BASE_PATH}/fundraising/:id`, validations.getByFundraisingId, controller.getByFundraisingId)
  router.get(`${INVESTIMENT_BASE_PATH}/:id`, validations.getById, controller.getById)
  router.post(INVESTIMENT_BASE_PATH, validations.create, controller.create)
  router.put(`${INVESTIMENT_BASE_PATH}/:id/ted`, validations.sendTED, multer.single('file'), controller.sendTED)
  router.put(`${INVESTIMENT_BASE_PATH}/confirm`, validations.confirm, controller.confirm)
  router.delete(`${INVESTIMENT_BASE_PATH}/:id`, validations.cancel, controller.cancel)

  return router
}
