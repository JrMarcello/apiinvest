import express from 'express'
import validations from './validations'
import multer from '../../core/multer'
import * as controller from './controller'

const router = express.Router()
const BUILDING_IMAGE_BASE_PAH = '/building/:idBuilding/images'

export default () => {
  router.get(BUILDING_IMAGE_BASE_PAH, validations.getByBuildingId, controller.getByBuildingId)
  router.post(`${BUILDING_IMAGE_BASE_PAH}/juridico`, validations.create, multer.array('documentos'), controller.createJuridic)
  router.post(BUILDING_IMAGE_BASE_PAH, validations.create, multer.array('images'), controller.create)
  router.delete(`${BUILDING_IMAGE_BASE_PAH}`, validations.remove, controller.remove)

  return router
}
