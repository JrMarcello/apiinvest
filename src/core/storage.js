import { Storage } from '@google-cloud/storage'
import { env } from '@common/utils'

const storage = new Storage({
  projectId: env().GOOGLE_CLOUD.PROJECT_ID,
  keyFilename: env().GOOGLE_CLOUD.KEYFILE_PATH
})

/**
 * Pushes file to GCS
 *
 * @param {*} file
 * @param {*} bucketName
 * @param {*} dirname
 */
export const uploadFile = async (file, bucketName, dirname) => {
  const fileName = `${Date.now()}.${file.mimetype.split('/')[1]}`

  await storage
    .bucket(bucketName)
    .file(`${dirname}/${fileName}`)
    .save(file.buffer)

  return `https://storage.googleapis.com/${bucketName}/${dirname}/${fileName}`
}
