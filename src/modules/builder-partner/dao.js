import db from '../../core/database'

const table = 'builder_partner'

/**
 * Find Partners by Builder ID
 *
 * @param {Interger} id - Builder ID
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
 * @param {Object} data - Partner data to be saved
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
 * @param {Object} id - Builder ID
 * @param {Object} id - Partner ID
 * @returns {Object} - Returns data
 */
export const remove = (idBuilder, id) => {
  return db
    .delete(table)
    .where('id_builder', idBuilder)
    .and('id', id)
    .run()
}
