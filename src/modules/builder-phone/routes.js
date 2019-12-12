import express from 'express'
import validations from './validations'
import * as controller from './controller'

const router = express.Router()
const BUILDER_PHONE_BASE_PAH = '/builder/:idBuilder/phones'

export default () => {
  router.get(BUILDER_PHONE_BASE_PAH, validations.getByBuilderId, controller.getByBuilderId)
  router.post(BUILDER_PHONE_BASE_PAH, validations.create, controller.create)
  router.delete(`${BUILDER_PHONE_BASE_PAH}`, validations.remove, controller.remove)

  return router
}
