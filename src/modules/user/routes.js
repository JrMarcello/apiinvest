import express from 'express'
import * as controller from './controller'
import * as validator from './validator'

const router = express.Router()
const API_USER_BASE_PAH = '/user'

export default () => {
  router.get(API_USER_BASE_PAH, validator.getAll(), controller.getAll)
  router.get(`${API_USER_BASE_PAH}/:id`, validator.getById(), controller.getById)
  router.post(API_USER_BASE_PAH, validator.create(), controller.create)
  router.put(API_USER_BASE_PAH, validator.update(), controller.update)
  router.delete(`${API_USER_BASE_PAH}/:id`, validator.remove(), controller.remove)
  router.post(`${API_USER_BASE_PAH}/login`, validator.login(), controller.login)

  return router
}
