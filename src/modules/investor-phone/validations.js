import { authenticate } from '../../core/middlewares/auth'
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
  getByInvestorId: [authenticate, acl.authorize, validate(schemas.validateID)],
  create: [authenticate, acl.authorize, validate(schemas.create)],
  remove: [authenticate, acl.authorize, validate(schemas.validateID)]
}
