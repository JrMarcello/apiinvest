import express from 'express'
import * as controller from './controller'
import validations from './validations'

const router = express.Router()
const BUILDER_PARTNER_BASE_PAH = '/builder/:idBuilder/partners'

export default () => {
  router.get(BUILDER_PARTNER_BASE_PAH, validations.getByBuilderId, controller.getByBuilderId)
  router.post(BUILDER_PARTNER_BASE_PAH, validations.create, controller.create)
  router.delete(`${BUILDER_PARTNER_BASE_PAH}`, validations.remove, controller.remove)

  return router
}
