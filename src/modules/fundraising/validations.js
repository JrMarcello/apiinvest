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
  getByBuildingId: {
    idBuilding: {
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  },
  create: {},
  update: {},
  finish: {
    id: {
      in: ['params'],
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  },
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
  getByBuildingId: [checkAuth, acl.authorize, validate(schemas.getByBuildingId)],
  create: [checkAuth, acl.authorize, validate(schemas.create)],
  update: [checkAuth, acl.authorize, validate(schemas.update)],
  finish: [checkAuth, acl.authorize, validate(schemas.finish)],
  remove: [checkAuth, acl.authorize, validate(schemas.remove)]
}
