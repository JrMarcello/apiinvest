import express from 'express'
import { checkAuth } from '@core/middlewares/auth'
import multer from '@core/multer'
import * as controller from './controller'

const router = express.Router()
const INVESTOR_DOCUMENT_BASE_PAH = '/investor/document'

export default () => {
  router.get('/investor/:id/document', checkAuth, controller.getByInvestorId)
  router.post(INVESTOR_DOCUMENT_BASE_PAH, checkAuth, multer.array('files', 3), controller.create)
  router.put(INVESTOR_DOCUMENT_BASE_PAH, checkAuth, controller.resend)

  return router
}
