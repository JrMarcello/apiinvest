// import 'dotenv/config'
import ip from 'ip'
import server from '@core/express'
import { configs, logger } from '@common/utils'

server.listen(configs().server.PORT, configs().server.HOST, () => {
  logger().info(`Server running in http://${ip.address()}:${configs().server.PORT}`)
  logger().info('To stop server type: ctrl + c')
})
