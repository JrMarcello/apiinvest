import express from 'express'
import { checkAuthorization } from '@core/auth'
import * as controller from './controller'

const router = express.Router()
const API_USER_BASE_PAH = '/user'

export default () => {
  router.get(API_USER_BASE_PAH, checkAuthorization, controller.getAll)
  router.get(`${API_USER_BASE_PAH}/:id`, checkAuthorization, controller.getById)
  router.post(API_USER_BASE_PAH, controller.create)
  router.put(API_USER_BASE_PAH, checkAuthorization, controller.update)
  router.delete(`${API_USER_BASE_PAH}/:id`, checkAuthorization, controller.remove)
  router.post(`${API_USER_BASE_PAH}/login`, controller.login)

  return router
}
