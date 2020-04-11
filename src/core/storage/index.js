import { Storage } from '@google-cloud/storage'
import { env } from '../../common/utils'

const bucket = new Storage({ keyFilename: env().GOOGLE_CLOUD.KEYFILE_PATH }).bucket(env().GOOGLE_CLOUD.BUCKET)

/**
 * Pushes file to GCS
 *
 * @param {*} file
 * @param {*} dirname
 */
export const uploadFile = async (file, dirname) => {
  const fileName = `${Date.now()}.${file.mimetype.split('/')[1]}`
  await bucket.file(`${dirname}/${fileName}`).save(file.buffer, { resumable: false })

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
  const filePath = url.split(env().GOOGLE_CLOUD.BUCKET)[1]
  if ((await bucket.file(filePath).exists())[0]) return bucket.file(filePath).delete()

  return false
}

/**
 * Generate a signed url to file in GCS
 *
 * @param {String} filePath
 */
export const getSignedUrl = async filePath => {
  const [url] = await bucket.file(filePath.split(env().GOOGLE_CLOUD.BUCKET)[1]).getSignedUrl({
    version: 'v4',
    action: 'read',
    expires: Date.now() + 1000 * 60 * 60 // 1h
  })

  return url
}
