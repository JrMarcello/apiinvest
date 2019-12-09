import * as storage from '../../core/storage'
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
 * Saves Images
 *
 * @param {Object} idBuilding - Building ID
 * @param {Object} imagesBuffer - Imgages data
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async (idBuilding, imagesBuffer) => {
  const images = await Promise.all(
    imagesBuffer.map(async image => {
      return {
        id_building: idBuilding,
        url: await storage.uploadFile(image, `building/${idBuilding}`)
      }
    })
  )

  return dao.create(images)
}

/**
 * Remove images
 *
 * @param {uuid} idBuilding - Building ID
 * @param {array} ids - Image IDs
 * @returns {Function} - Returns a Promisse
 */
export const remove = async (idBuilding, ids) => {
  // TODO
  // storage.removeFile(await dao.getByIDs(ids))

  return dao.remove(idBuilding, ids)
}
