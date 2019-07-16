import config from '@core/config'
import server from '@core/express'
import * as logger from '@core/logger'

server.listen(config.server.PORT, () => {
  logger.info(`Server running in http://localhost:${config.server.PORT}`)
  logger.info('To stop server type: ctrl + c')
})
