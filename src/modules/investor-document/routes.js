import express from 'express'
import validations from './validations'
import multer from '../../core/multer'
import * as controller from './controller'

const router = express.Router()
const INVESTOR_DOCUMENT_BASE_PAH = '/investor/:idInvestor/documents'

export default () => {
  router.get(INVESTOR_DOCUMENT_BASE_PAH, validations.getByInvestorId, controller.getByInvestorId)
  router.post(INVESTOR_DOCUMENT_BASE_PAH, validations.create, multer.array('docs', 3), controller.create)

  return router
}
