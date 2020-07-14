import * as storage from '../../core/storage'
import * as dao from './dao'

/**
 * Find Images by Building ID
 *
 * @param {string} id - Building ID
 * @returns - Returns a object
 */
export const getByBuildingId = async id => {
  const images = await Promise.all(
    (await dao.getByBuildingId(id)).map(async image => {
      image.url = await storage.getSignedUrl(image.url)

      return image
    })
  )

  return images
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
        url: await storage.uploadFile(image, `buildings/${idBuilding}`, true)
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
  storage.removeFiles(await dao.getByIDs(ids))

  return dao.remove(idBuilding, ids)
}
