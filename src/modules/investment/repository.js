import * as mailer from '@core/mailer'
import * as storage from '@core/storage'
import { env } from '@common/utils'
import * as dao from './dao'
import { getById as getInvestor } from '../investor/repository'

/**
 *  Get all Investments from database.
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find an Investment by ID
 *
 * @param {Interger} id - Investment ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getById = id => {
  return dao.getById(id)
}

/**
 * Find Investments by Investor ID
 *
 * @param {Interger} id - Investor ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByInvestorId = id => {
  return dao.getByInvestorId(id)
}

/**
 * Find Investments by Fundraising ID
 *
 * @param {Interger} id - Fundraising ID
 * @returns {Promisse} - Returns a Promisse
 */
export const getByFundraisingId = id => {
  return dao.getByFundraisingId(id)
}

/**
 *  Get all pendings Investments
 *
 * @param {Object} params - Params for query
 * @returns {Promisse} - Returns a Promisse
 */
export const getPendings = async params => {
  return dao.getPendings(params)
}

/**
 * Saves an Investment in database
 *
 * @param {Object} data - Investment data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  const investor = await getInvestor(data.id_investor)

  if (!investor || !investorIsEnableToInvestments(investor))
    throw Error('Complete seu cadastro para começar a investir')

  const investment = await dao.create(data)

  mailer.sendEmail(getEmailParams(investor))

  return investment
}

const investorIsEnableToInvestments = investor => {
  // TODO
  return !!investor
}

const getEmailParams = investor => {
  return {
    from: env().emails.contact,
    to: investor.email,
    subject: env().emails.subjects.NEW_INVESTMENT,
    // TODO: Criar template
    html: `<h2>Parabens! Você realizou um novo investimento</h2><p>Olá <b>${investor.username}</b></p>`
  }
}

/**
 * Send TED proof for an Investment
 *
 * @param {Object} data - TED proof
 * @returns {Promisse} - Returns a Promisse
 */
export const tedConfirmation = async data => {
  if (!data || data.file) throw Error()

  const updateble = {
    id: data.id,
    ted_proof_url: await storage.uploadfile(data.file, env().GOOGLE_CLOUD.TEDS_BUCKET)
  }

  return dao.update(updateble)
}

/**
 * Send TED proof for an Investment
 *
 * @param {Object} data - TED proof
 * @returns {Promisse} - Returns a Promisse
 */
export const confirmation = async data => {
  const updateble = {
    id: data.id,
    confirmed: true
  }

  return dao.update(updateble)
}

/**
 * Cancel an Investment
 *
 * @param {Object} id - Investment id
 * @returns {Function} - Returns a Promisse
 */
export const cancel = id => {
  return dao.cancel(id)
}
