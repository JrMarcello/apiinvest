import bcrypt from 'bcrypt'
import constants from '@common/constants'
import { getToken } from '@core/auth'
import * as dao from './dao'

/**
 *  Get all User from database.
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find a User by ID
 *
 * @param {Interger} id - User ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = id => {
  return dao.getById(id)
}

/**
 * Saves a User in database
 *
 * @param {Object} data - User data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = data => {
  return dao.create(data)
}

/**
 * Updates an User, given an id
 *
 * @param {Object} data - User data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  const updateble = {
    id: data.id,
    username: data.username,
    password: data.password
  }

  return dao.update(updateble)
}

/**
 * Remove a User
 *
 * @param {Object} id - User data to be removed
 * @returns {Function} - Returns the callback function
 */
export const remove = id => {
  return dao.remove(id)
}

/**
 * Login an User, given an email and password
 *
 * @param {Object} params - User data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const login = async params => {
  const user = (await dao.getByEmail(params.email))[0]

  if (!user || !bcrypt.compareSync(params.password, user.password))
    throw Error(constants.user.error.INVALID_USER_LOGIN.message)

  return getToken(user)
}
