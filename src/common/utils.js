import uuid from 'uuid/v4'
import configs from '../core/configs'
import * as log from '../core/logger'

export const env = () => configs
export const logger = () => log

export const generateUUID = () => uuid()
