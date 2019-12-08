import { checkAuth } from '../../core/middlewares/auth'
import acl from '../../core/middlewares/acl'
import validate from '../../core/middlewares/validator'

const schemas = {
  getAll: {},
  getAllAvaliables: {},
  getById: {
    id: {
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  },
  getByBuilderId: {
    id: {
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  },
  create: {},
  update: {},
  remove: {
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
  getById: [checkAuth, acl.authorize, validate(schemas.getById)],
  getByBuilderId: [checkAuth, acl.authorize, validate(schemas.getByBuilderId)],
  create: [checkAuth, acl.authorize, validate(schemas.create)],
  update: [checkAuth, acl.authorize, validate(schemas.update)],
  remove: [checkAuth, acl.authorize, validate(schemas.remove)]
}
