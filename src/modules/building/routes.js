import express from 'express'
import validations from './validations'
import * as controller from './controller'

const router = express.Router()
const BUILDING_BASE_PATH = '/building'

export default () => {
  router.get(`${BUILDING_BASE_PATH}/avaliables`, validations.getAllAvaliables, controller.getAllAvaliables)
  router.get(`${BUILDING_BASE_PATH}/builder/:id`, validations.getByBuilderId, controller.getByBuilderId)
  router.get(`${BUILDING_BASE_PATH}/:id`, validations.getById, controller.getById)
  router.get(BUILDING_BASE_PATH, validations.getAll, controller.getAll)
  router.post(BUILDING_BASE_PATH, validations.create, controller.create)
  router.put(BUILDING_BASE_PATH, validations.update, controller.update)
  router.delete(`${BUILDING_BASE_PATH}/:id`, validations.remove, controller.remove)

  return router
}
