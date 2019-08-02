import express from 'express'
import * as controller from './controller'
import * as validator from './validator'

const router = express.Router()
const USER_BASE_PAH = '/user'

export default () => {
  router.get(USER_BASE_PAH, validator.getAll(), controller.getAll)
  router.get(`${USER_BASE_PAH}/:id`, validator.getById(), controller.getById)
  router.post(USER_BASE_PAH, validator.create(), controller.create)
  router.put(USER_BASE_PAH, validator.update(), controller.update)
  router.delete(`${USER_BASE_PAH}/:id`, validator.remove(), controller.remove)
  router.post(`${USER_BASE_PAH}/login`, validator.login(), controller.login)

  return router
}
