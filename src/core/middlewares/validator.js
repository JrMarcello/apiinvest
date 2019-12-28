import { checkSchema, validationResult } from 'express-validator'
import constants from '../../common/constants'

export default validation => {
  return [
    checkSchema(validation),
    (req, res, next) => {
      const errors = validationResult(req)
      if (errors.isEmpty()) {
        return next()
      }

      return res.status(500).send(Object.assign(constants.validations.INVALID_REQUEST_DATA, { errors: errors.array() }))
    }
  ]
}
