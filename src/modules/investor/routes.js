import express from 'express'
import { checkAuth } from '@core/auth'
import * as controller from './controller'

const router = express.Router()
const API_INVESTOR_BASE_PAH = '/investor'

export default () => {
  router.get(API_INVESTOR_BASE_PAH, checkAuth, controller.getAll)
  router.get(`${API_INVESTOR_BASE_PAH}/:id`, checkAuth, controller.getById)
  router.get(`${API_INVESTOR_BASE_PAH}/user/:id`, checkAuth, controller.getByUserId)
  router.post(API_INVESTOR_BASE_PAH, checkAuth, controller.create)
  router.put(API_INVESTOR_BASE_PAH, checkAuth, controller.update)
  router.delete(`${API_INVESTOR_BASE_PAH}/:id`, checkAuth, controller.remove)

  return router
}
