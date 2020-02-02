import { authenticate } from '../../core/middlewares/auth'
import acl from '../../core/middlewares/acl'
import validate from '../../core/middlewares/validator'

const schemas = {
  getAll: {},
  create: {},
  update: {},
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
  getById: [authenticate, acl.authorize, validate(schemas.validateID)],
  getByUserId: [authenticate, acl.authorize, validate(schemas.validateID)],
  getAllBuildingsById: [authenticate, acl.authorize, validate(schemas.validateID)],
  create: [authenticate, acl.authorize, validate(schemas.create)],
  update: [authenticate, acl.authorize, validate(schemas.update)],
  remove: [authenticate, acl.authorize, validate(schemas.validateID)]
}
