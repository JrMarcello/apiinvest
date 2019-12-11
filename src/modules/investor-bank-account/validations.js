import { checkAuth } from '../../core/middlewares/auth'
import acl from '../../core/middlewares/acl'
import validate from '../../core/middlewares/validator'

const schemas = {
  getByInvestorId: {
    idInvestor: {
      in: ['params'],
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  },
  create: {},
  remove: {
    idInvestor: {
      in: ['params'],
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  }
}

export default {
  getByInvestorId: [checkAuth, acl.authorize, validate(schemas.getByInvestorId)],
  create: [checkAuth, acl.authorize, validate(schemas.create)],
  remove: [checkAuth, acl.authorize, validate(schemas.remove)]
}
