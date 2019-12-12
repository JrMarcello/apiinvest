import express from 'express'
import validations from './validations'
import multer from '../../core/multer'
import * as controller from './controller'

const router = express.Router()
const INVESTOR_BASE_PAH = '/investor'

export default () => {
  router.get(INVESTOR_BASE_PAH, validations.getAll, controller.getAll)
  router.get(`${INVESTOR_BASE_PAH}/user/:id`, validations.getByUserId, controller.getByUserId)
  router.get(`${INVESTOR_BASE_PAH}/:id`, validations.getById, controller.getById)
  router.get(`${INVESTOR_BASE_PAH}/:id/investments`, validations.getAllInvestmentsById, controller.getAllInvestmentsById)
  router.get(`${INVESTOR_BASE_PAH}/:id/investments/count`, validations.getInvestmentsCount, controller.getInvestmentsCount)
  router.get(`${INVESTOR_BASE_PAH}/:id/investments/invested-amount`, validations.getInvestedAmount, controller.getInvestedAmount)

  router.post(INVESTOR_BASE_PAH, validations.create, multer.array('docs'), controller.create)
  router.put(INVESTOR_BASE_PAH, validations.update, controller.update)

  return router
}
