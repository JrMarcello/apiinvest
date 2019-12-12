import { checkAuth } from '../../core/middlewares/auth'
import acl from '../../core/middlewares/acl'
import validate from '../../core/middlewares/validator'

const schemas = {
  validateID: {
    idInvestor: {
      in: ['params'],
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  },
  create: {}
}

export default {
  getByInvestorId: [checkAuth, acl.authorize, validate(schemas.validateID)],
  create: [checkAuth, acl.authorize, validate(schemas.create)]
}
