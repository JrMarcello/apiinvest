import db from '../../core/database'

const table = 'builder_partner'

/**
 * Find Partners by Builder ID
 *
 * @param {string} id - Builder ID
 * @returns - Returns a object
 */
export const getByBuilderId = id => {
  return db
    .select()
    .from(table)
    .where('id_builder', id)
    .run()
}

/**
 * Create Partners
 *
 * @param {object} data - Partner data to be saved
 * @returns - Returns a object
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
 * Remove Partners
 *
 * @param {string} idBuilder - Builder ID
 * @param {number[]} ids - Partner ID
 * @returns - Returns a object
 */
export const remove = (idBuilder, ids) => {
  return db
    .delete(table)
    .where('id_builder', idBuilder)
    .and('id', 'IN', ids)
    .run()
}
