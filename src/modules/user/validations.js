import { authenticate } from '../../core/middlewares/auth'
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
      isString: true,
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
      isString: true,
      errorMessage: 'Senha inválida'
    }
  },
  login: {
    email: {
      isEmail: true,
      errorMessage: 'Email inválido'
    },
    password: {
      isString: true,
      errorMessage: 'Senha inválida'
    }
  },
  facebookbSign: {
    accessToken: {
      isString: true,
      errorMessage: 'Token de acesso inválido'
    },
    userID: {
      isString: true,
      errorMessage: 'userID acesso inválido'
    }
  },
  googleSign: {
    accessToken: {
      isString: true,
      errorMessage: 'Token de acesso inválido'
    },
    googleId: {
      isString: true,
      errorMessage: 'googleId acesso inválido'
    }
  },
  forgotPassword: {
    email: {
      isEmail: true,
      errorMessage: 'Email inválido'
    }
  },
  resetPassword: {
    token: {
      isAlphanumeric: true,
      errorMessage: 'Token inválido'
    },
    password: {
      isString: true,
      errorMessage: 'Senha inválida'
    }
  }
}

export default {
  getAll: [authenticate, acl.authorize, validate(schemas.getAll)],
  getById: [authenticate, acl.authorize, validate(schemas.validateID)],
  create: [validate(schemas.create)],
  update: [authenticate, acl.authorize, validate(schemas.update)],
  remove: [authenticate, acl.authorize, validate(schemas.validateID)],
  login: [validate(schemas.login)],
  facebookbSign: [validate(schemas.facebookbSign)],
  googleSign: [validate(schemas.googleSign)],
  forgotPassword: [validate(schemas.forgotPassword)],
  resetPassword: [validate(schemas.resetPassword)]
}
