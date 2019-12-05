import { checkAuth } from '../../core/middlewares/auth'
import acl from '../../core/middlewares/acl'
import validate from '../../core/middlewares/validator'

const schemas = {
  getAll: {},
  getById: {
    id: {
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  },
  getByUserId: {
    id: {
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  },
  getAllBuildingsById: {
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
  getById: [checkAuth, acl.authorize, validate(schemas.getById)],
  getByUserId: [checkAuth, acl.authorize, validate(schemas.getByUserId)],
  getAllBuildingsById: [checkAuth, acl.authorize, validate(schemas.getAllBuildingsById)],
  create: [checkAuth, acl.authorize, validate(schemas.create)],
  update: [checkAuth, acl.authorize, validate(schemas.update)],
  remove: [checkAuth, acl.authorize, validate(schemas.remove)]
}
