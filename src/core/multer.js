import Multer from 'multer'

const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 15 * 1024 * 1024 // Maximum file size is 15MB
  }
})

export default multer
