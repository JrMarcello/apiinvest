import express from 'express'
import { checkAuth } from '@core/auth'
import * as controller from './controller'

const router = express.Router()
const INVESTOR_BANK_ACCOUNT_BASE_PAH = '/investor/bank-account'

export default () => {
  router.get('/investor/:id/bank-account', checkAuth, controller.getByInvestorId)
  router.post(INVESTOR_BANK_ACCOUNT_BASE_PAH, checkAuth, controller.create)
  router.delete(`${INVESTOR_BANK_ACCOUNT_BASE_PAH}/:id`, checkAuth, controller.remove)

  return router
}
