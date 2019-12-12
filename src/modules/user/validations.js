import { checkAuth } from '../../core/middlewares/auth'
import acl from '../../core/middlewares/acl'
import validate from '../../core/middlewares/validator'

const schemas = {
  getAll: {},
  validateID: {
    id: {
      isUUID: true,
      errorMessage: 'ID inválido'
    }
  },
  create: {
    username: {
      isString: true,
      errorMessage: 'Username inválido'
    },
    email: {
      isEmail: true,
      errorMessage: 'Email inválido'
    },
    password: {
      isAlphanumeric: true,
      errorMessage: 'Senha inválida'
    }
  },
  update: {
    username: {
      isString: true,
      errorMessage: 'Username inválido'
    },
    email: {
      isEmail: true,
      errorMessage: 'Email inválido'
    },
    password: {
      isAlphanumeric: true,
      errorMessage: 'Senha inválida'
    }
  },
  login: {
    email: {
      isEmail: true,
      errorMessage: 'Email inválido'
    },
    password: {
      isAlphanumeric: true,
      errorMessage: 'Senha inválida'
    }
  }
}

export default {
  getAll: [checkAuth, acl.authorize, validate(schemas.getAll)],
  getById: [checkAuth, acl.authorize, validate(schemas.validateID)],
  create: [validate(schemas.create)],
  update: [checkAuth, acl.authorize, validate(schemas.update)],
  remove: [checkAuth, acl.authorize, validate(schemas.validateID)],
  login: [validate(schemas.login)]
}
