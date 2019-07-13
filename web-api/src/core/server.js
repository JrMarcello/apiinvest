import config from './config'
import server from './express'

server.listen(config.server.PORT, () => {
  console.log(`\nServer running in http://localhost:${config.server.PORT}`)
  console.log('To stop server type: ctrl + c\n')
})
