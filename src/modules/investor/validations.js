import { authenticate } from '../../core/middlewares/auth'
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
  getAll: [authenticate, acl.authorize, validate(schemas.getAll)],
  getById: [authenticate, acl.authorize, validate(schemas.validateID)],
  getByUserId: [authenticate, acl.authorize, validate(schemas.validateID)],
  getAllInvestmentsById: [authenticate, acl.authorize, validate(schemas.validateID)],
  getInvestmentsCount: [authenticate, acl.authorize, validate(schemas.validateID)],
  getInvestedAmount: [authenticate, acl.authorize, validate(schemas.validateID)],
  getReceivedAmount: [authenticate, acl.authorize, validate(schemas.validateID)],
  getProjectedAmount: [authenticate, acl.authorize, validate(schemas.validateID)],
  getDashboardInfo: [authenticate, acl.authorize, validate(schemas.validateID)],
  create: [authenticate, acl.authorize, validate(schemas.create)],
  update: [authenticate, acl.authorize, validate(schemas.update)]
}
