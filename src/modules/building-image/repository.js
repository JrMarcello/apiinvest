import * as storage from '../../core/storage'
import * as dao from './dao'

/**
 * Find Images by Building ID
 *
 * @param {string} id - Building ID
 * @returns - Returns a object
 */
export const getByBuildingId = id => {
  return dao.getByBuildingId(id)
}

/**
 * Saves Images
 *
 * @param {string} idBuilding - Building ID
 * @param {buffer[]} imagesBuffer - Imgages data
 * @returns - Returns a object
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
 * @param {string} idBuilding - Building ID
 * @param {number[]} ids - Image IDs
 * @returns - Returns a object
 */
export const remove = async (idBuilding, ids) => {
  // TODO
  // storage.removeFiles(await dao.getByIDs(ids))

  return dao.remove(idBuilding, ids)
}
