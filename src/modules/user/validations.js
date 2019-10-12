import { checkAuth } from '@core/middlewares/auth'
import acl from '@core/middlewares/acl'
import validate from '@core/middlewares/validator'

const schemas = {
  getAll: {},
  getById: {
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
  remove: {
    id: {
      in: ['params'],
      isUUID: true,
      errorMessage: 'ID inválido'
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
  getById: [checkAuth, acl.authorize, validate(schemas.getById)],
  create: [checkAuth, acl.authorize, validate(schemas.create)],
  update: [checkAuth, acl.authorize, validate(schemas.update)],
  remove: [checkAuth, acl.authorize, validate(schemas.remove)],
  login: [validate(schemas.login)]
}
