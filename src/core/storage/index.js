import { Storage } from '@google-cloud/storage'
import constants from '../../common/constants'

import { env } from '../../common/utils'

const bucket = new Storage({ keyFilename: env().GOOGLE_CLOUD.KEYFILE_PATH }).bucket(env().GOOGLE_CLOUD.BUCKET)

/**
 * Pushes file to GCS
 *
 * @param {*} file
 * @param {*} dirname
 * @param {*} isPublic
 */
export const uploadFile = async (file, filepath, isPublic) => {
  if (!['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'].includes(file.mimetype)) {
    throw constants.validations.INVALID_FILE_EXTESION
  }

  const fileFullPath = `${filepath}/${Date.now()}.${file.mimetype.split('/').pop()}`
  await bucket.file(fileFullPath).save(file.buffer, { resumable: false })

  if (isPublic) {
    bucket.file(fileFullPath).makePublic()
    return `https://storage.googleapis.com/${env().GOOGLE_CLOUD.BUCKET}/${fileFullPath}`
  }

  return fileFullPath
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
export const removeFile = async filePath => {
  if ((await bucket.file(filePath).exists())[0]) return bucket.file(filePath).delete()

  return false
}

/**
 * Generate a signed url to file in GCS
 *
 * @param {String} filePath
 */
export const getSignedUrl = async filePath => {
  const options = {
    // version: 'v4',
    action: 'read',
    expires: Date.now() + 1000 * 60 * 60 // 1h
  }

  return (await bucket.file(filePath).getSignedUrl(options))[0]
}
