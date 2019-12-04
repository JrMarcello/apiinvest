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
        url: await storage.uploadFile(file, 'buildings')
      }
    })
  )

  const images = dao.create(files)

  return images
}

/**
 * Remove an image
 *
 * @param {Object} ids - Image ids
 * @returns {Function} - Returns a Promisse
 */
export const remove = ids => {
  // TODO
  // Remover do GC
  // Criar um getByIds()
  // Ajustar o o remove() para suportar array
  // Deletar tds getByIds() no GC
  // Deletar tds na base
  return dao.remove(ids)
}
