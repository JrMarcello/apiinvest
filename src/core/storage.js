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
 * @param {*} dirname
 */
export const uploadFile = async (file, dirname) => {
  const bucketName = env().GOOGLE_CLOUD.BUCKET
  const fileName = `${Date.now()}.${file.mimetype.split('/')[1]}`

  await storage
    .bucket(bucketName)
    .file(`${dirname}/${fileName}`)
    .save(file.buffer)

  return `https://storage.googleapis.com/${bucketName}/${dirname}/${fileName}`
}

// /**
//  * Pushes files to GCS
//  *
//  * @param {*} file
//  * @param {*} dirname
//  */
// export const uploadFiles = async (files, dirname) => {
//   const bucketName = env().GOOGLE_CLOUD.BUCKET

//   let fileName
//   const urls = files.map(file => {
//     fileName = `${Date.now()}.${file.mimetype.split('/')[1]}`

//     storage
//       .bucket(bucketName)
//       .file(`${dirname}/${fileName}`)
//       .save(file.buffer)

//     return `https://storage.googleapis.com/${bucketName}/${dirname}/${fileName}`
//   })

//   return urls
// }

/**
 * Remove file to GCS
 *
 * @param {*} url
 * @param {*} dirname
 */
export const removeFile = async (urls, dirname) => {
  const bucketName = env().GOOGLE_CLOUD.BUCKET

  return urls.forEach(url => {
    storage
      .bucket(bucketName)
      .file(url)
      .delete()
  })
}
