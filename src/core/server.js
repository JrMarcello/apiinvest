import 'dotenv/config'
import server from '@core/express'
import { configs, logger } from '@common/utils'

server.listen(configs().server.PORT, () => {
  logger().info(`Server running in http://localhost:${configs().server.PORT}`)
  logger().info('To stop server type: ctrl + c')
})
