import express from 'express'

// Controllers
import { ping } from './controller'

// Router
const router = express.Router()

export default () => {
  // Routes
  router.get('/test/ping', ping)

  return router
}
