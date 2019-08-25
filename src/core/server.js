import server from '@core/express'
import { env, logger } from '@common/utils'

server.listen(env().server.PORT, env().server.HOST, () => {
  logger().info(`Server running in http://localhost:${env().server.PORT}`)
  logger().info('To stop server type: ctrl + c')
})
