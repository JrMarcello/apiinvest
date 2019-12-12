import { checkAuth } from '../../core/middlewares/auth'
import acl from '../../core/middlewares/acl'
import validate from '../../core/middlewares/validator'

const schemas = {
  getAll: {},
  create: {},
  update: {},
  validateID: {
    id: {
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  }
}

export default {
  getAll: [checkAuth, acl.authorize, validate(schemas.getAll)],
  getById: [checkAuth, acl.authorize, validate(schemas.validateID)],
  getByUserId: [checkAuth, acl.authorize, validate(schemas.validateID)],
  getAllInvestmentsById: [checkAuth, acl.authorize, validate(schemas.validateID)],
  getInvestmentsCount: [checkAuth, acl.authorize, validate(schemas.validateID)],
  getInvestedAmount: [checkAuth, acl.authorize, validate(schemas.validateID)],
  getReceivedAmount: [checkAuth, acl.authorize, validate(schemas.validateID)],
  getProjectedAmount: [checkAuth, acl.authorize, validate(schemas.validateID)],
  create: [checkAuth, acl.authorize, validate(schemas.create)],
  update: [checkAuth, acl.authorize, validate(schemas.update)]
}
