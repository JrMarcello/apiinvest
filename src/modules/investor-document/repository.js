import * as storage from '@core/storage'
import { env } from '@common/utils'
import * as dao from './dao'

// /**
//  *  Get all Documents
//  *
//  * @param {Object} params - Params for query
//  * @returns {Promisse} - Returns a Promisse
//  */
// export const getAll = async params => {
//   return dao.getAll(params)
// }

// /**
//  * Find an Document by ID
//  *
//  * @param {Interger} id - Document ID
//  * @returns {Promisse} - Returns a Promisse
//  */
// export const getById = id => {
//   return dao.getById(id)
// }

/**
 * Find an Document by Investor ID
 *
 * @param {Interger} id - Investor ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByInvestorId = id => {
  return dao.getByInvestorId(id)
}

/**
 * Saves the Document
 *
 * @param {Object} idInvestor - Investor id
 * @param {Object} filesBuffer - Files data
 * @returns {Promisse} - Returns a Promisse
 */
export const create = (idInvestor, filesBuffer) => {
  const files = filesBuffer.map(async (file, i) => {
    return {
      id_investor: idInvestor,
      url: await storage.uploadfile(file, env().GOOGLE_CLOUD.TEDS_BUCKET),
      type: i
    }
  })

  const documents = dao.create(files)

  return documents
}

// /**
//  * Updates an Document
//  *
//  * @param {Object} data - Document data
//  * @returns {Promisse} - Returns a Promisse
//  */
// export const update = data => {
//   const updateble = {
//     id: data.id,
//     agency: data.agency,
//     document: data.document
//   }

//   return dao.update(updateble)
// }

// /**
//  * Remove an Document
//  *
//  * @param {Object} id - Document id
//  * @returns {Function} - Returns a Promisse
//  */
// export const remove = id => {
//   return dao.remove(id)
// }
