import { checkAuth } from '../../core/middlewares/auth'
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
  getAll: [checkAuth, acl.authorize, validate(schemas.getAll)],
  getAllAvaliables: [checkAuth, acl.authorize, validate(schemas.getAllAvaliables)],
  getById: [checkAuth, acl.authorize, validate(schemas.validateID)],
  getByBuilderId: [checkAuth, acl.authorize, validate(schemas.validateID)],
  create: [checkAuth, acl.authorize, validate(schemas.create)],
  update: [checkAuth, acl.authorize, validate(schemas.update)],
  remove: [checkAuth, acl.authorize, validate(schemas.validateID)]
}
