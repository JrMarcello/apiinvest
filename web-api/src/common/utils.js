import conf from '@core/configs'
import * as log from '@core/logger'
import uuid from 'uuid/v4'

export const configs = () => conf

export const logger = () => log

export const generateUUID = () => uuid()

// module.exports.configs = conf
// module.exports.logger = log
