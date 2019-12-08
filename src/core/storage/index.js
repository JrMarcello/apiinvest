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

  // console.log(await storage.bucket(bucketName).exists())
  // await storage.bucket(bucketName).getFiles()

  // await storage
  //   .bucket(bucketName)
  //   .file(`${dirname}/${fileName}`)
  //   .save(file.buffer)

  return `https://storage.googleapis.com/${bucketName}/${dirname}/${fileName}`
}

/**
 * Remove file to GCS
 *
 * @param {*} url
 * @param {*} dirname
 */
export const removeFile = async urls => {
  const bucketName = env().GOOGLE_CLOUD.BUCKET

  console.log(
    storage
      .bucket(bucketName)
      .file(urls[0])
      .exists()
  )

  // return urls.forEach(url => {
  //   storage
  //     .bucket(bucketName)
  //     .file(url)
  //     .delete()
  // })
}
