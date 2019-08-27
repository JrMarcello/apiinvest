import * as dao from './dao'

/**
 *  Get all Fundraisings
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find a Fundraising by ID
 *
 * @param {Interger} id - Fundraising ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = id => {
  return dao.getById(id)
}

/**
 * Find Fundraisings by Building ID
 *
 * @param {Interger} id - Building ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByBuildingId = id => {
  return dao.getByBuildingId(id)
}

// /**
//  * Find Fundraisings by Custodian ID
//  *
//  * @param {Interger} id - Custodian ID
//  * @returns {Promisse} - Returns a Promisse
//  */
// export const getByCustodianId = id => {
//   return dao.getByCustodianId(id)
// }

/**
 * Saves a Fundraising
 *
 * @param {Object} data - Fundraising data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = data => {
  return dao.create(data)
}

/**
 * Updates an Fundraising
 *
 * @param {Object} data - Fundraising data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  const updateble = {
    id: data.id,
    id_building: data.id_building,
    id_custodian: data.id_custodian,
    amount: data.amount,
    initial_date: data.initial_date,
    final_date: data.final_date
  }

  return dao.update(updateble)
}

/**
 * Finish a Fundraising
 *
 * @param {Object} data - Fundraising data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const finish = id => {
  return dao.update({
    id,
    finished: true
  })
}

/**
 * Remove an Fundraising
 *
 * @param {Object} id - Fundraising id
 * @returns {Function} - Returns a Promisse
 */
export const remove = id => {
  return dao.remove(id)
}
