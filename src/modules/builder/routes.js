import express from 'express'
import * as controller from './controller'
import validations from './validations'

const router = express.Router()
const BUILDER_BASE_PATH = '/builder'

export default () => {
  router.get(BUILDER_BASE_PATH, validations.getAll, controller.getAll)
  router.get(`${BUILDER_BASE_PATH}/user/:id`, validations.getByUserId, controller.getByUserId)
  router.get(`${BUILDER_BASE_PATH}/:id`, validations.getById, controller.getById)
  router.get(`${BUILDER_BASE_PATH}/:id/buildings`, validations.getAllBuildingsById, controller.getAllBuildingsById)

  router.post(BUILDER_BASE_PATH, validations.create, controller.create)
  // router.put(BUILDER_BASE_PATH, validations.update, controller.update)
  router.delete(`${BUILDER_BASE_PATH}/:id`, validations.remove, controller.remove)

  return router
}
