import express from 'express'
import validations from './validations'
import * as controller from './controller'

const router = express.Router()
const FUNDRAISING_BASE_PATH = '/fundraising'

export default () => {
  router.get(FUNDRAISING_BASE_PATH, validations.getAll, controller.getAll)
  router.get(`${FUNDRAISING_BASE_PATH}/building/:idBuilding`, validations.getByBuildingId, controller.getByBuildingId)
  router.get(`${FUNDRAISING_BASE_PATH}/:id/amountraised`, validations.getAmountRaised, controller.getAmountRaised)
  router.get(`${FUNDRAISING_BASE_PATH}/:id/investors`, validations.getInvestorsByFundraisingId, controller.getInvestorsByFundraisingId)
  router.get(`${FUNDRAISING_BASE_PATH}/:id`, validations.getById, controller.getById)
  router.post(FUNDRAISING_BASE_PATH, validations.create, controller.create)
  router.put(FUNDRAISING_BASE_PATH, validations.update, controller.update)
  router.put(`${FUNDRAISING_BASE_PATH}/:id/finish`, validations.finish, controller.finish)
  router.delete(`${FUNDRAISING_BASE_PATH}/:id`, validations.remove, controller.remove)

  return router
}
