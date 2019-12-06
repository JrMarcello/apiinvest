import { checkAuth } from '../../core/middlewares/auth'
import acl from '../../core/middlewares/acl'
import validate from '../../core/middlewares/validator'

const schemas = {
  getByBuilderId: {
    id: {
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  },
  create: {},
  remove: {
    idBuilder: {
      in: ['params'],
      isUUID: true,
      errorMessage: 'ID inválido'
    },
    id: {
      in: ['params'],
      isInt: true,
      errorMessage: 'ID inválido'
    }
  }
}

export default {
  getByBuilderId: [checkAuth, acl.authorize, validate(schemas.getByBuilderId)],
  create: [checkAuth, acl.authorize, validate(schemas.create)],
  remove: [checkAuth, acl.authorize, validate(schemas.remove)]
}
