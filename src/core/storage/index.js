import { Storage } from '@google-cloud/storage'
import { env } from '../../common/utils'

const bucket = new Storage({ keyFilename: env().GOOGLE_CLOUD.KEYFILE_PATH }).bucket(env().GOOGLE_CLOUD.BUCKET)

bucket.makePublic({ includeFiles: true })

/**
 * Pushes file to GCS
 *
 * @param {*} file
 * @param {*} dirname
 */
export const uploadFile = async (file, dirname) => {
  const fileName = `${Date.now()}.${file.mimetype.split('/')[1]}`
  await bucket.file(`${dirname}/${fileName}`).save(file.buffer)

  return `https://storage.googleapis.com/${env().GOOGLE_CLOUD.BUCKET}/${dirname}/${fileName}`
}

/**
 * Remove files to GCS
 *
 * @param {Array} files
 */
export const removeFiles = async files => {
  return files.forEach(async img => {
    removeFile(img.url)
  })
}

/**
 * Remove file to GCS
 *
 * @param {String} url
 */
export const removeFile = async url => {
  return bucket.file(url.split(env().GOOGLE_CLOUD.BUCKET)[1]).delete()
}
