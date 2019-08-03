import { checkAuth } from '@core/auth'
import { check, validationResult } from 'express-validator'
import constants from '@common/constants'

const rules = {
  getAll: [],
  getById: [check('id', constants.validations.INVALID_DATA_FIELD).isUUID()],
  create: [
    // check('id_perfil').isInt(),
    check('username').isString(),
    check('email').isEmail(),
    check('password').isAlphanumeric()
  ],
  update: [
    check('id', constants.validations.INVALID_DATA_FIELD).isUUID(),
    check('username').isString(),
    check('password', constants.validations.INVALID_DATA_FIELD).isAlphanumeric()
  ],
  remove: [check('id', constants.validations.INVALID_DATA_FIELD).isUUID()],
  login: [
    check('email', constants.validations.INVALID_DATA_FIELD).isEmail(),
    check('password', constants.validations.INVALID_DATA_FIELD).isAlphanumeric()
  ]
}

const validate = (req, res, next) => {
  try {
    validationResult(req).throw()
  } catch (errors) {
    return res.status(500).send(Object.assign(constants.validations.INVALID_REQUEST_DATA, { errors: errors.array() }))
  }

  return next()
}

export const getAll = () => {
  return [checkAuth, rules.getAll, validate]
}

export const getById = () => {
  return [checkAuth, rules.getById, validate]
}

export const create = () => {
  return [rules.create, validate]
}

export const update = () => {
  return [checkAuth, rules.update, validate]
}

export const remove = () => {
  return [checkAuth, rules.remove, validate]
}

export const login = () => {
  return [rules.login, validate]
}
