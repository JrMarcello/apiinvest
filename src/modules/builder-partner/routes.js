import express from 'express'
import { checkAuth } from '@core/middlewares/auth'
import * as controller from './controller'

const router = express.Router()
const BUILDER_PARTNER_BASE_PAH = '/builder/partner'

export default () => {
  router.get('/builder/:id/partner', checkAuth, controller.getByBuilderId)
  router.post(BUILDER_PARTNER_BASE_PAH, checkAuth, controller.create)
  router.delete('/builder/:id/partner', checkAuth, controller.remove)

  return router
}
