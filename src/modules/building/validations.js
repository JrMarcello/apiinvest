import { authenticate } from '../../core/middlewares/auth'
import acl from '../../core/middlewares/acl'
import validate from '../../core/middlewares/validator'

const schemas = {
  getAll: {},
  getAllAvaliables: {},
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
  getAllAvaliables: [authenticate, acl.authorize, validate(schemas.getAllAvaliables)],
  getById: [authenticate, acl.authorize, validate(schemas.validateID)],
  getByBuilderId: [authenticate, acl.authorize, validate(schemas.validateID)],
  create: [authenticate, acl.authorize, validate(schemas.create)],
  update: [authenticate, acl.authorize, validate(schemas.update)],
  remove: [authenticate, acl.authorize, validate(schemas.validateID)]
}
