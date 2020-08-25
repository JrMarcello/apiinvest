import { authenticate } from '../../core/middlewares/auth'
import acl from '../../core/middlewares/acl'
import validate from '../../core/middlewares/validator'

const schemas = {
  getAll: {},
  validateID: {
    id: {
      in: ['params'],
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  },
  getByBuildingId: {
    idBuilding: {
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  },
  create: {},
  update: {}
}

export default {
  getAll: [authenticate, acl.authorize, validate(schemas.getAll)],
  getById: [authenticate, acl.authorize, validate(schemas.validateID)],
  getByBuildingId: [authenticate, acl.authorize, validate(schemas.getByBuildingId)],
  getAmountRaised: [validate(schemas.validateID)],
  getInvestorsByFundraisingId: [authenticate, acl.authorize, validate(schemas.validateID)],
  create: [authenticate, acl.authorize, validate(schemas.create)],
  update: [authenticate, acl.authorize, validate(schemas.update)],
  finish: [authenticate, acl.authorize, validate(schemas.validateID)],
  remove: [authenticate, acl.authorize, validate(schemas.validateID)]
}
