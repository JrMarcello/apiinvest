import express from 'express'
import * as controller from './controller'
import validations from './validations'

const router = express.Router()
const USER_BASE_PAH = '/user'

export default () => {
  router.get(USER_BASE_PAH, validations.getAll, controller.getAll)
  router.get(`${USER_BASE_PAH}/:id`, validations.getById, controller.getById)
  router.post(USER_BASE_PAH, validations.create, controller.create)
  // router.put(USER_BASE_PAH, validations.update, controller.update)
  // router.delete(`${USER_BASE_PAH}/:id`, validations.remove, controller.remove)
  router.post(`${USER_BASE_PAH}/login`, validations.login, controller.login)

  return router
}
