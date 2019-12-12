import { checkAuth } from '../../core/middlewares/auth'
import acl from '../../core/middlewares/acl'
import validate from '../../core/middlewares/validator'

const schemas = {
  getAll: {},
  validateID: {
    id: {
      in: ['params'],
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
  update: {}
}

export default {
  getAll: [checkAuth, acl.authorize, validate(schemas.getAll)],
  getById: [checkAuth, acl.authorize, validate(schemas.validateID)],
  getByBuildingId: [checkAuth, acl.authorize, validate(schemas.getByBuildingId)],
  getAmountRaised: [checkAuth, acl.authorize, validate(schemas.validateID)],
  create: [checkAuth, acl.authorize, validate(schemas.create)],
  update: [checkAuth, acl.authorize, validate(schemas.update)],
  finish: [checkAuth, acl.authorize, validate(schemas.validateID)],
  remove: [checkAuth, acl.authorize, validate(schemas.validateID)]
}
