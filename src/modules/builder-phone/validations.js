import { authenticate } from '../../core/middlewares/auth'
import acl from '../../core/middlewares/acl'
import validate from '../../core/middlewares/validator'

const schemas = {
  validateID: {
    idBuilder: {
      in: ['params'],
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  },
  create: {}
}

export default {
  getByBuilderId: [authenticate, acl.authorize, validate(schemas.validateID)],
  create: [authenticate, acl.authorize, validate(schemas.create)],
  remove: [authenticate, acl.authorize, validate(schemas.validateID)]
}
