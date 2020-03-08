import { Storage } from '@google-cloud/storage'
import { env } from '../../common/utils'

const storage = new Storage({ keyFilename: env().GOOGLE_CLOUD.KEYFILE_PATH })

/**
 * Pushes file to GCS
 *
 * @param {*} file
 * @param {*} dirname
 */
export const uploadFile = async (file, dirname) => {
  const bucketName = env().GOOGLE_CLOUD.BUCKET
  const fileName = `${Date.now()}.${file.mimetype.split('/')[1]}`

  await storage
    .bucket(bucketName)
    .file(`${dirname}/${fileName}`)
    .save(file.buffer)
    .makePublic()

  return `https://storage.googleapis.com/${bucketName}/${dirname}/${fileName}`
}

/**
 * Remove files to GCS
 *
 * @param {Array} files
 */
export const removeFiles = async files => {
  const bucketName = env().GOOGLE_CLOUD.BUCKET

  return files.forEach(async img => {
    storage
      .bucket(bucketName)
      .file(img.url.split(bucketName)[1])
      .delete()
  })
}

/**
 * Remove file to GCS
 *
 * @param {String} url
 */
export const removeFile = async url => {
  const bucketName = env().GOOGLE_CLOUD.BUCKET

  return storage
    .bucket(bucketName)
    .file(url.split(bucketName)[1])
    .delete()
}
