import express from 'express'
import { checkAuth } from '@core/auth'
import multer from '@core/multer'
import * as controller from './controller'

const router = express.Router()
const INVESTOR_BASE_PAH = '/investor'

export default () => {
  // router.get(INVESTOR_BASE_PAH, checkAuth, controller.getAll) // REMOVER QUANDO EM PRODUCAO
  router.get(`${INVESTOR_BASE_PAH}/user/:id`, checkAuth, controller.getByUserId)
  router.get(`${INVESTOR_BASE_PAH}/:id`, checkAuth, controller.getById)
  router.post(INVESTOR_BASE_PAH, checkAuth, multer.array('docs'), controller.create)
  // router.put(INVESTOR_BASE_PAH, checkAuth, controller.update)
  router.delete(`${INVESTOR_BASE_PAH}/:id`, checkAuth, controller.remove)

  return router
}
