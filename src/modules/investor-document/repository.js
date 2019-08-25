import * as storage from '@core/storage'
import { env } from '@common/utils'
import * as dao from './dao'

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
 * @param {Object} filesBuffer - Files data
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  const files = await Promise.all(
    data.files.map(async (file, i) => {
      return {
        id_investor: data.id_investor,
        url: await storage.uploadFile(file, env().GOOGLE_CLOUD.BUCKET, 'documents'),
        order: i
      }
    })
  )

  const documents = dao.create(files)

  return documents
}
