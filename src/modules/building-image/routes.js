import express from 'express'
import { checkAuth } from '@core/auth'
import multer from '@core/multer'
import * as controller from './controller'

const router = express.Router()
const BUILDING_IMAGE_BASE_PAH = '/building/image'

export default () => {
  router.get('/building/:id/image', checkAuth, controller.getByBuildingId)
  router.post(BUILDING_IMAGE_BASE_PAH, checkAuth, multer.array('images'), controller.create)
  router.delete('/building/:id/image', checkAuth, controller.remove)

  return router
}
