import express from 'express'
import { checkAuth } from '@core/auth'
import * as controller from './controller'

const router = express.Router()
const BUILDER_PHONE_BASE_PAH = '/builder/phone'

export default () => {
  router.get('/builder/:id/phone', checkAuth, controller.getByBuilderId)
  router.post(BUILDER_PHONE_BASE_PAH, checkAuth, controller.create)
  router.delete('/builder/:id/phone', checkAuth, controller.remove)

  return router
}
