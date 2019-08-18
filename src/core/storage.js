import { Storage } from '@google-cloud/storage'
import { configs } from '@common/utils'

// const storage = new Storage({
//   projectId: configs().GOOGLE_CLOUD.PROJECT_ID,
//   keyFilename: configs().GOOGLE_CLOUD.KEYFILE
// })

export const uploadFile = async (file, bucketName) => {
  const fileName = `${Date.now()}-${file.originalname}`

  // await storage
  //   .bucket(bucketName)
  //   .file(`${Date.now()}-${file.originalname}`)
  //   .upload(file.path)

  // const bucket = storage.bucket(bucketName)
  // const file = bucket.file(fileName);
  // const res = await bucket.upload(localFilePath, options)

  return `https://storage.googleapis.com/${bucketName}/${fileName}`
}
