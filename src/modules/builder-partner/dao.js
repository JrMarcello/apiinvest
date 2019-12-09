import db from '../../core/database'

const table = 'builder_partner'

/**
 * Find Partners by Builder ID
 *
 * @param {number} id - Builder ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByBuilderId = id => {
  return db
    .select()
    .from(table)
    .where('id_builder', id)
    .run()
}

/**
 * Create an Partner
 *
 * @param {number} data - Partner data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  return db
    .insert(
      'id_builder',
      'name',
      'company_name',
      'cpf',
      'cnpj',
      'phone',
      'address_street',
      'address_number',
      'address_neighborhood',
      'address_city',
      'address_state',
      'address_country',
      'address_cep'
    )
    .values(data)
    .into(table)
    .returning('*')
    .run()
}

/**
 * Remove an Partner
 *
 * @param {UUID} id - Builder ID
 * @param {number} id - Partner ID
 * @returns {Promise} - Returns a Promisse
 */
export const remove = (idBuilder, id) => {
  return db
    .delete(table)
    .where('id_builder', idBuilder)
    .and('id', id)
    .run()
}
