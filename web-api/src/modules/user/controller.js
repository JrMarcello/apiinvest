import * as repository from './repository'

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const getAll = async (request, response) => {
  // logInfo('[USER] - [/GET] HTTP Request :: getAll method');

  try {
    response.json(await repository.getAll(request.params))
  } catch (error) {
    // Printar erro no log e/ou console
    console.log(error)

    response.status(500).json(error)
  }
}

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const getById = async (request, response) => {
  // logInfo('[USER] - [/GET] HTTP Request :: getById method');

  try {
    response.json(await repository.getById(request.params.id))
  } catch (error) {
    // Printar erro no log e/ou console
    response.status(500).json(error)
  }
}

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const create = async (request, response) => {
  // logInfo('[USER] - [/POST] HTTP Request :: create method');

  try {
    response.json(await repository.create(request.body))
  } catch (error) {
    // Printar erro no log e/ou console
    response.status(500).json(error)
  }
}

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const update = async (request, response) => {
  // logInfo('[USER] - [/PUT] HTTP Request :: update method');

  try {
    request.body.id = request.params.id
    response.json(await repository.update(request.body))
  } catch (error) {
    // Printar erro no log e/ou console
    response.status(500).json(error)
  }
}

/**
 * @param {Object} request - HTTP request
 * @param {Object} response - HTTP response
 * @returns {Object} HTTP response with status code and data
 */
export const remove = async (request, response) => {
  // logInfo('[USER] - [/DELETE] HTTP Request :: remove method');

  try {
    response.json(await repository.remove(request.params.id))
  } catch (error) {
    // Printar erro no log e/ou console
    response.status(500).json(error)
  }
}
