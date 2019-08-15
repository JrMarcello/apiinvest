import * as mailer from '@core/mailer'
import * as dao from './dao'
import { getById as getInvestor } from '../investor/repository'
import configs from '../../common/configs'

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
 * Saves an Investment in database
 *
 * @param {Object} data - Investment data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  const investor = await getInvestor(data.id_investor)

  if (!investor || !investorIsEnableToInvestments(investor)) throw Error('Usuario não pode realizar invetimento')

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
    from: configs().emails.contact,
    to: investor.email,
    subject: configs().emails.subjects.NEW_INVESTMENT,
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
export const TEDProof = data => {
  const uri = storege.uploadfile(data.file)

  const updateble = {
    id: data.id,
    ted_uri: uri
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
