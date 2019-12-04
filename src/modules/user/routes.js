import express from 'express'
import * as controller from './controller'
import validations from './validations'

const router = express.Router()
const USER_BASE_PAH = '/user'

export default () => {
  // router.get(`${USER_BASE_PAH}/me`, validations.getMe, controller.getMe)
  // router.put(`${USER_BASE_PAH}/me`, validations.update, controller.updateMe)
  // router.delete(`${USER_BASE_PAH}/me`, validations.remove, controller.removeMe)

  router.get(USER_BASE_PAH, validations.getAll, controller.getAll)
  router.get(`${USER_BASE_PAH}/:id`, validations.getById, controller.getById)
  router.put(USER_BASE_PAH, validations.update, controller.update)
  router.delete(`${USER_BASE_PAH}/:id`, validations.remove, controller.remove)

  router.post(`${USER_BASE_PAH}/login`, validations.login, controller.login)

  return router
}
