import { authenticate } from '../../core/middlewares/auth'
import acl from '../../core/middlewares/acl'
import validate from '../../core/middlewares/validator'

const schemas = {
  getAll: {},
  getPendings: {},
  create: {},
  confirm: {},
  validateID: {
    id: {
      in: ['params'],
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  }
}

export default {
  getAll: [authenticate, acl.authorize, validate(schemas.getAll)],
  getPendings: [authenticate, acl.authorize, validate(schemas.getPendings)],
  getByInvestorId: [authenticate, acl.authorize, validate(schemas.validateID)],
  getByFundraisingId: [authenticate, acl.authorize, validate(schemas.validateID)],
  getById: [authenticate, acl.authorize, validate(schemas.validateID)],
  create: [authenticate, acl.authorize, validate(schemas.create)],
  sendTED: [authenticate, acl.authorize, validate(schemas.validateID)],
  confirm: [authenticate, acl.authorize, validate(schemas.confirm)],
  cancel: [authenticate, acl.authorize, validate(schemas.validateID)]
}
