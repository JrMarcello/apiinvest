import express from 'express'
import * as controller from './controller'
import validations from './validations'

const router = express.Router()

export default () => {
  router.get('/builder/:id/partner', validations.getByBuilderId, controller.getByBuilderId)
  router.post('/builder/partner', validations.create, controller.create)
  router.delete('/builder/:idBuilder/partner/:id', validations.remove, controller.remove)

  return router
}
