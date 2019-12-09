import glob from 'glob'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path'
import compression from 'compression'

import { env } from '../common/utils'

const server = express()

function setCORS() {
  server.use(cors())
  // server.use((req, res, next) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');
  //   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
  //   next();
  // });
}

function setParsers() {
  server.use(helmet())
  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(bodyParser.json())
  server.use(morgan('dev'))
  server.use(compression())

  server.use(express.static('public'))
}

function setRoutes() {
  server.get(env().API_BASE_PATH, (req, res) => {
    res.redirect('/api')
  })

  glob.sync(path.join(__dirname, '../modules/**/routes.js')).forEach(routePath => {
    server.use(env().API_BASE_PATH, require(path.resolve(routePath)).default())
  })

  server.get('*', (req, res) => {
    res.redirect('/api')
  })
}

setCORS()
setParsers()
setRoutes()

export default server
