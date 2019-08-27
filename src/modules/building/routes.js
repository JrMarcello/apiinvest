import express from 'express'
import { checkAuth } from '@core/auth'
import * as controller from './controller'

const router = express.Router()
const BUILDING_BASE_PATH = '/building'

export default () => {
  // router.get(BUILDING_BASE_PATH, checkAuth, controller.getAll)
  router.get(`${BUILDING_BASE_PATH}/:id`, checkAuth, controller.getById)
  router.get(`/builder/:id${BUILDING_BASE_PATH}`, checkAuth, controller.getByBuilderId)
  router.post(BUILDING_BASE_PATH, checkAuth, controller.create)
  router.put(BUILDING_BASE_PATH, checkAuth, controller.update)
  router.delete(`${BUILDING_BASE_PATH}/:id`, checkAuth, controller.remove)

  return router
}
