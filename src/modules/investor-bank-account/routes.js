import express from 'express'
import validations from './validations'
import * as controller from './controller'

const router = express.Router()
const INVESTOR_BANK_ACCOUNT_BASE_PAH = '/investor/:idInvestor/bank-accounts'

export default () => {
  router.get(INVESTOR_BANK_ACCOUNT_BASE_PAH, validations.getByInvestorId, controller.getByInvestorId)
  router.post(INVESTOR_BANK_ACCOUNT_BASE_PAH, validations.create, controller.create)
  router.delete(`${INVESTOR_BANK_ACCOUNT_BASE_PAH}`, validations.remove, controller.remove)

  return router
}
