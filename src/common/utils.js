import * as log from '@core/logger'
import configs from '@core/configs'
import uuid from 'uuid/v4'

export const env = () => configs
export const logger = () => log

export const generateUUID = () => uuid()
