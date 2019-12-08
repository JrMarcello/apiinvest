import { checkAuth } from '../../core/middlewares/auth'
import acl from '../../core/middlewares/acl'
import validate from '../../core/middlewares/validator'

const schemas = {
  getByBuildingId: {
    idBuilding: {
      in: ['params'],
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  },
  create: {},
  remove: {
    idBuilding: {
      in: ['params'],
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  }
}

export default {
  getByBuildingId: [checkAuth, acl.authorize, validate(schemas.getByBuildingId)],
  create: [checkAuth, acl.authorize, validate(schemas.create)],
  remove: [checkAuth, acl.authorize, validate(schemas.remove)]
}
