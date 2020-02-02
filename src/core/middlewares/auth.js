import jwt from 'jsonwebtoken'
import passport from 'passport'
import BearerStrategy from 'passport-http-bearer'

import { env } from '../../common/utils'
import constants from '../../common/constants'

passport.use(
  new BearerStrategy((token, done) => {
    jwt.verify(token, env().SECRET_KEY, (err, user) => {
      if (!token || !user || err) return done(constants.auth.error.UNAUTHORIZED)

      return done(null, user, { scope: 'all' })
    })
  })
)

export const authenticate = (req, res, next) => {
  passport.authenticate('bearer', (err, user) => {
    if (err || !user) return res.status(401).send(Object.assign(constants.auth.error.UNAUTHORIZED, { errors: [] }))

    req.user = user

    return next()
  })(req, res, next)
}

/**
 * Retrun an JWT token
 *
 * @param {*} payload -
 */
export const getToken = payload => jwt.sign(payload, env().SECRET_KEY, { algorithm: 'HS256', expiresIn: '365d' })

/**
 * Middiware to check if token is valid
 */
// export const checkAuth = async (req, res, next) => {
//   if (!req.headers || !req.headers.authorization)
//     return res.status(401).send(Object.assign(constants.auth.error.UNAUTHORIZED, { errors: [] }))

//   const token = req.headers.authorization.split(' ')[1]

//   if (!token) return res.status(401).send(Object.assign(constants.auth.error.UNAUTHORIZED, { errors: [] }))

//   req.user = await jwt.verify(token, env().SECRET_KEY)

//   return next()
// }
