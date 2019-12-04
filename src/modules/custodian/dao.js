import db from '../../core/database'
import { generateUUID } from '../../common/utils'

const table = 'custodian'

/**
 *  Find all Custodians
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = () => {
  return db
    .select()
    .from(table)
    .where('active', true)
    .run()
}

/**
 * Find a Custodian by ID
 *
 * @param {Interger} id - Custodian ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = id => {
  return db
    .select()
    .from(table)
    .where('id', id)
    .and('active', true)
    .run()
}

/**
 * Find a Custodian by CNPJ
 *
 * @param {Interger} cnpj - Custodian CNPJ
 * @returns {Promisse} - Returns a Promisse
 */
export const getByCNPJ = cnpj => {
  return db
    .select()
    .from(table)
    .where('cnpj', cnpj)
    .and('active', true)
    .run()
}

/**
 * Create an Custodian
 *
 * @param {Object} data - Custodian data
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  data.id = await generateUUID()

  return db
    .insert(data)
    .into(table)
    .returning('*')
    .run()
}

/**
 * Update an Custodian
 *
 * @param {Object} data - Custodian data
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  return db
    .update(table)
    .set(data)
    .where('id', data.id)
    .run()
}

/**
 * Remove an Custodian
 *
 * @param {Object} id - Custodian ID
 * @returns {Object} - Returns data
 */
export const remove = id => {
  return db
    .update(table)
    .set('active', false)
    .where('id', id)
    .run()
}
