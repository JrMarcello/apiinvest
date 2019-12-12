import * as storage from '../../core/storage'
import * as dao from './dao'

/**
 * Find an Document by Investor ID
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getByInvestorId = id => {
  return dao.getByInvestorId(id)
}

/**
 * Saves the Documents
 *
 * @param {string} idInvestor - Investor ID
 * @param {object[]} imagesBuffer - Imgages data
 * @returns - Returns a object
 */
export const create = async (idInvestor, imagesBuffer) => {
  await remove(idInvestor)

  const files = await Promise.all(
    imagesBuffer.map(async (file, i) => {
      return {
        id_investor: idInvestor,
        url: await storage.uploadFile(file, `documents/${idInvestor}`),
        order: i
      }
    })
  )

  return dao.create(files)
}

/**
 * Remove all Documents of a Investor
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const remove = async id => {
  const docs = await getByInvestorId(id)

  if (!docs || docs.length === 0) return false

  storage.removeFiles(docs)

  return dao.remove(id)
}
