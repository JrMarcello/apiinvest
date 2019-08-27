import * as storage from '@core/storage'
import { env } from '@common/utils'
import * as dao from './dao'

/**
 * Find Images by Building ID
 *
 * @param {Interger} id - Building ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByBuildingId = id => {
  return dao.getByBuildingId(id)
}

/**
 * Saves the Image
 *
 * @param {Object} filesBuffer - Files data
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  const files = await Promise.all(
    data.files.map(async file => {
      return {
        id_building: data.id_building,
        url: await storage.uploadFile(file, env().GOOGLE_CLOUD.BUCKET, 'buildings')
      }
    })
  )

  const images = dao.create(files)

  return images
}

/**
 * Remove an image
 *
 * @param {Object} id - Image id
 * @returns {Function} - Returns a Promisse
 */
export const remove = id => {
  // TODO
  // Remover do GC
  return dao.remove(id)
}
