import { authenticate } from '../../core/middlewares/auth'
import acl from '../../core/middlewares/acl'
import validate from '../../core/middlewares/validator'

const schemas = {
  getAll: {},
  validateID: {
    id: {
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
  create: [authenticate, acl.authorize, validate(schemas.create)],
  update: [authenticate, acl.authorize, validate(schemas.update)],
  remove: [authenticate, acl.authorize, validate(schemas.validateID)]
}
