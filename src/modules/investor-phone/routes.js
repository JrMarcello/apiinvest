import express from 'express'
import { checkAuth } from '../../core/middlewares/auth'
import * as controller from './controller'

const router = express.Router()
const INVESTOR_PHONE_BASE_PAH = '/investor/phone'

export default () => {
  router.get('/investor/:id/phone', checkAuth, controller.getByInvestorId)
  router.post(INVESTOR_PHONE_BASE_PAH, checkAuth, controller.create)
  router.delete(`${INVESTOR_PHONE_BASE_PAH}/:id`, checkAuth, controller.remove)

  return router
}
