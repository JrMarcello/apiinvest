import { checkAuth } from '../../core/middlewares/auth'
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
  getAll: [checkAuth, acl.authorize, validate(schemas.getAll)],
  getPendings: [checkAuth, acl.authorize, validate(schemas.getPendings)],
  getByInvestorId: [checkAuth, acl.authorize, validate(schemas.validateID)],
  getByFundraisingId: [checkAuth, acl.authorize, validate(schemas.validateID)],
  getById: [checkAuth, acl.authorize, validate(schemas.validateID)],
  create: [checkAuth, acl.authorize, validate(schemas.create)],
  sendTED: [checkAuth, acl.authorize, validate(schemas.validateID)],
  confirm: [checkAuth, acl.authorize, validate(schemas.confirm)],
  cancel: [checkAuth, acl.authorize, validate(schemas.validateID)]
}
