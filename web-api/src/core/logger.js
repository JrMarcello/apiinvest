import winston from 'winston'
import 'winston-daily-rotate-file'
import chalk from 'chalk'
import moment from 'moment'

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.ms(),
    winston.format.metadata(),
    winston.format.prettyPrint()
  ),
  transports: [
    new winston.transports.DailyRotateFile({
      filename: './logs/%DATE%.log',
      datePattern: 'DD-MM-YYYY',
      maxFiles: '90d',
      zippedArchive: true
    })
  ]
})

/**
 *
 * @param msg
 */
export const info = msg => {
  const formattedMsg = `[INFO] - [${moment().format()}] -> ${msg}\n`

  process.stdout.write(chalk.bold.white(formattedMsg))
  // logger.info(msg)
}

/**
 *
 * @param msg
 */
export const warn = msg => {
  const formattedMsg = `[WARN] - ${moment().format()} -> ${msg}\n`

  process.stdout.write(chalk.bold.yellow(formattedMsg))
  logger.warn(msg)
}

/**
 *
 * @param msg
 */
export const error = msg => {
  const formattedMsg = `[ERROR] - ${moment().format()} -> ${typeof msg === 'object' ? msg.message : msg}\n`

  process.stderr.write(chalk.bold.red(formattedMsg))
  logger.error(msg)
}
