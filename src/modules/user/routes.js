import express from 'express'
import * as controller from './controller'
import validations from './validations'

const router = express.Router()
const USER_BASE_PAH = '/user'

export default () => {
  router.get(`${USER_BASE_PAH}/profiles`, controller.getProfiles)

  router.get(USER_BASE_PAH, validations.getAll, controller.getAll)
  router.get(`${USER_BASE_PAH}/:id`, validations.getById, controller.getById)
  router.put(USER_BASE_PAH, validations.update, controller.update)
  router.delete(`${USER_BASE_PAH}/:id`, validations.remove, controller.remove)

  router.post(`${USER_BASE_PAH}`, validations.create, controller.create)
  router.post(`${USER_BASE_PAH}/login`, validations.login, controller.login)
  router.post(`${USER_BASE_PAH}/login/facebook`, validations.facebookbSign, controller.login)
  router.post(`${USER_BASE_PAH}/login/google`, validations.googleSign, controller.login)
  router.post(`${USER_BASE_PAH}/forgotpassword`, validations.forgotPassword, controller.forgotPassword)
  router.put(`${USER_BASE_PAH}/resetpassword`, validations.resetPassword, controller.resetPassword)

  return router
}
