import server from './express'
import { env, logger } from '../common/utils'
import ScheduleService from './services/schedule'

server.listen(env().server.PORT, env().server.HOST, () => {
  logger().info(`Server running in http://localhost:${env().server.PORT}`)
  logger().info('To stop server type: ctrl + c')

  // Agendamentos
  ScheduleService.checkFundraisings()
})
