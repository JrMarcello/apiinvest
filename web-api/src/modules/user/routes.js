import express from 'express'
import * as controller from './controller'

const router = express.Router()
const API_INVESTOR_BASE_PAH = '/investor'

export default () => {
  router.get(API_INVESTOR_BASE_PAH, controller.getAll)
  router.get(`${API_INVESTOR_BASE_PAH}/:id`, controller.getById)
  router.post(API_INVESTOR_BASE_PAH, controller.create)
  router.put(`${API_INVESTOR_BASE_PAH}/:id`, controller.update)
  router.delete(`${API_INVESTOR_BASE_PAH}/:id`, controller.remove)

  return router
}
