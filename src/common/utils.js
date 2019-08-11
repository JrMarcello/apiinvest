import * as log from '@core/logger'
import uuid from 'uuid/v4'
import conf from './configs'

export const configs = () => conf

export const logger = () => log

export const generateUUID = () => uuid()

// module.exports.configs = conf
// module.exports.logger = log
