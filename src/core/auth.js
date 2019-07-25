import jwt from 'jsonwebtoken'
import { configs } from '@common/utils'
import constants from '@common/constants'

/**
 * Retrun an JWT token
 *
 * @param {*} payload -
 */
export const getToken = payload => jwt.sign(payload, configs().SECRET_KEY, { algorithm: 'HS256', expiresIn: '365d' })

/**
 * Middiware to check if token is valid
 *
 * @param {*} req -
 * @param {*} res -
 * @param {*} next -
 */
export const checkAuth = async (req, res, next) => {
  if (!req.headers || !req.headers.authorization) return res.status(401).send(constants.auth.error.UNAUTHORIZED)

  const token = req.headers.authorization.split(' ')[1]

  if (!token) return res.status(401).send(constants.auth.error.UNAUTHORIZED)

  req.user = await jwt.verify(token, configs().SECRET_KEY)

  return next()
}
