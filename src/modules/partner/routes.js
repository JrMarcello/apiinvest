import express from 'express'
import { checkAuth } from '@core/auth'
import * as controller from './controller'

const router = express.Router()
const PARTNER_BASE_PAH = '/partner'

export default () => {
  router.get(PARTNER_BASE_PAH, checkAuth, controller.getAll)
  router.get(`${PARTNER_BASE_PAH}/:id`, checkAuth, controller.getById)
  router.post(PARTNER_BASE_PAH, checkAuth, controller.create)
  router.put(PARTNER_BASE_PAH, checkAuth, controller.update)
  router.delete(`${PARTNER_BASE_PAH}/:id`, checkAuth, controller.remove)

  return router
}
