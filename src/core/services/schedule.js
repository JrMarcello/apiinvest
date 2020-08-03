// Bibliotecas
import { logger } from '../../common/utils'
import statuses from '../../common/statuses'

const scheduler = require('node-schedule')

// Models
const { Fundraising, Investment, Sequelize } = require('../../database/models')

function checkFundraisings() {
  scheduler.scheduleJob(process.env.FUNDRAISING_CRON, async () => {
    try {
      logger().info('Iniciando verificação de captações para processar.')

      const today = new Date()

      // 1. Obter todas as captações pendentes
      const fundraisings = await Fundraising.findAll({
        where: {
          status: {
            [Sequelize.Op.or]: [statuses.fundraising.OPENED, statuses.fundraising.CONFIRMED]
          }
        }
      })

      if (fundraisings.length > 0) {
        logger().info(`Foram encontradas ${fundraisings.length} a serem processadas.`)

        // 2. Verificar se passou da data de retorno
        const closed = []
        const canceled = []

        fundraisings.forEach(fundraising => {
          if (today >= fundraising.final_date) {
            if (fundraising.status === statuses.fundraising.CONFIRMED) {
              closed.push(fundraising.id)
            } else if (fundraising.status === statuses.fundraising.OPENED) {
              canceled.push(fundraising.id)
            }
          }
        })

        // Encerrando captações
        if (closed.length > 0) {
          await Fundraising.update(
            { status: statuses.fundraising.CLOSED },
            {
              where: {
                id: {
                  [Sequelize.Op.or]: closed
                }
              }
            }
          )
        }

        // Cancelando captações e investimentos
        if (canceled.length > 0) {
          await Fundraising.update(
            { status: statuses.fundraising.CANCELED },
            {
              where: {
                id: {
                  [Sequelize.Op.or]: canceled
                }
              }
            }
          )

          await Investment.update(
            { status: statuses.investment.WAITING_RETURN },
            {
              where: {
                id_fundraising: {
                  [Sequelize.Op.or]: canceled
                }
              }
            }
          )
        }

        logger().info(`${closed.length} captações foram encerradas e ${canceled.length} captações foram canceladas.`)
      } else {
        logger().info('Não foram encontradas captações para serem processadas.')
      }
    } catch (error) {
      logger().error(error)
    }
  })
}

module.exports = {
  checkFundraisings
}
