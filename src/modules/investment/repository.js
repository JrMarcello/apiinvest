import * as mailer from '../../core/mailer'
import * as storage from '../../core/storage'
import { env } from '../../common/utils'
import * as dao from './dao'
import { getById as getInvestor } from '../investor/repository'

/**
 *  Get all Investments from database.
 *
 * @param {object} params - Params for query
 * @returns - Returns a object
 */
export const getAll = async params => {
  return dao.getAll(params)
}

/**
 * Find an Investment by ID
 *
 * @param {string} id - Investment ID
 * @returns - Returns a object
 */
export const getById = id => {
  return dao.getById(id)
}

/**
 * Find Investments by Investor ID
 *
 * @param {string} id - Investor ID
 * @returns - Returns a object
 */
export const getByInvestorId = id => {
  return dao.getByInvestorId(id)
}

/**
 * Find Investments by Fundraising ID
 *
 * @param {string} id - Fundraising ID
 * @returns - Returns a object
 */
export const getByFundraisingId = id => {
  return dao.getByFundraisingId(id)
}

/**
 *  Get all pendings Investments
 *
 * @param {object} params - Params for query
 * @returns - Returns a object
 */
export const getPendings = async params => {
  return dao.getPendings(params)
}

/**
 * Saves an Investment in database
 *
 * @param {object} data - Investment data
 * @returns - Returns a object
 */
export const create = async data => {
  const investor = await getInvestor(data.id_investor)

  if (!investor) {
    throw Error('Complete seu cadastro para começar a investir')
  }

  if (env().BLACK_LIST.includes(investor.cpf) || env().BLACK_LIST.includes(investor.cnpj)) {
    throw Error('Socios não podem realizar investimentos')
  }

  const investment = await dao.create(data)

  mailer.sendEmail(getEmailParams(investor))

  return investment
}

/**
 * @param {object} investor - Investor data
 * @return - Returns a object
 */
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
 * @param {object} data - TED proof
 * @returns - Returns a object
 */
export const tedConfirmation = async data => {
  if (!data || !data.file) throw Error()

  const url = await storage.uploadFile(data.file, 'teds')

  return dao.update({
    id: data.id,
    ted_proof_url: url
  })
}

/**
 * Confirm an Investment
 *
 * @param {object[]} data - Investment IDs
 * @returns - Returns a object
 */
export const confirm = async data => {
  if (!Array.isArray(data)) throw Error('Formato de dados inválido')

  return dao.confirm(data)
}

/**
 * Cancel an Investment
 *
 * @param {object} id - Investment ID
 * @returns - Returns a object
 */
export const cancel = id => {
  return dao.cancel(id)
}
