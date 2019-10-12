import express from 'express'
import { checkAuth } from '@core/middlewares/auth'
import * as controller from './controller'

const router = express.Router()
const BUILDER_BASE_PATH = '/builder'

export default () => {
  router.get(BUILDER_BASE_PATH, checkAuth, controller.getAll)
  router.get(`${BUILDER_BASE_PATH}/user/:id`, checkAuth, controller.getByUserId)
  router.get(`${BUILDER_BASE_PATH}/:id`, checkAuth, controller.getById)
  router.post(BUILDER_BASE_PATH, checkAuth, controller.create)
  // router.put(BUILDER_BASE_PATH, checkAuth, controller.update)
  router.delete(`${BUILDER_BASE_PATH}/:id`, checkAuth, controller.remove)

  return router
}
