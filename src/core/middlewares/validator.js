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

// const validate = validations => {
//   return async (req, res, next) => {
//     await Promise.all(validations.map(validation => validation.run(req)))

//     const errors = validationResult(req)
//     if (errors.isEmpty()) {
//       return next()
//     }

//     return res.status(500).send(Object.assign(constants.validations.INVALID_REQUEST_DATA, { errors: errors.array() }))
//   }
// }
