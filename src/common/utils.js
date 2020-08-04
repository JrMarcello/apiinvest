import uuid from 'uuid/v4'
import configs from '../core/configs'
import * as log from '../core/logger'

export const env = () => configs
export const logger = () => log

export const generateUUID = () => uuid()

export const check1Week = (date) => {
    if (!date) return false
    const now = new Date()
    const past = new Date(date)
    const diff = Math.abs(now.getTime() - past.getTime())
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    return days >= 7
}

export const countDays = (date) => {
    if (!date) return undefined
    const now = new Date()
    const past = new Date(date)
    const diff = now.getTime() - past.getTime()
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    return days
}
