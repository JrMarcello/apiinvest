import * as storage from '../../core/storage'
import * as dao from './dao'

/**
 * Find an Document by Investor ID
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getByInvestorId = async id => {
  const docs = await Promise.all(
    (await dao.getByInvestorId(id)).map(async doc => {
      doc.url = await storage.getSignedUrl(doc.url)

      return doc
    })
  )

  return docs
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

  await dao.create(files)

  return getByInvestorId(idInvestor)
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
