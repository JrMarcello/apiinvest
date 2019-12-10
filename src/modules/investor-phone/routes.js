import express from 'express'
import validations from './validations'
import * as controller from './controller'

const router = express.Router()
const INVESTOR_PHONE_BASE_PAH = '/investor/:idInvestor/phone'

export default () => {
  router.get(INVESTOR_PHONE_BASE_PAH, validations.getByInvestorId, controller.getByInvestorId)
  router.post(INVESTOR_PHONE_BASE_PAH, validations.create, controller.create)
  router.delete(`${INVESTOR_PHONE_BASE_PAH}/:id`, validations.remove, controller.remove)

  return router
}
