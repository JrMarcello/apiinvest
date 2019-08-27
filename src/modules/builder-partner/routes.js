import express from 'express'
import { checkAuth } from '@core/auth'
import * as controller from './controller'

const router = express.Router()
const BUILDER_PARTNER_BASE_PAH = '/builder/partner'

export default () => {
  router.get('/builder/:id/partner', checkAuth, controller.getByBuilderId)
  router.post(BUILDER_PARTNER_BASE_PAH, checkAuth, controller.create)
  router.delete(`${BUILDER_PARTNER_BASE_PAH}/:id`, checkAuth, controller.remove)

  return router
}
