import * as mailer from '../../core/mailer'
import * as storage from '../../core/storage'
import { env } from '../../common/utils'
import constants from '../../common/constants'
import * as dao from './dao'
import * as repositoryInvestor from '../investor/repository'
import * as repositoryFundraising from '../fundraising/repository'

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
 * @param {string} idInvestor - Investor ID
 * @returns - Returns a object
 */
export const getById = async (id, idInvestor) => {
  const investment = await dao.getById(id, idInvestor)

  investment.ted_proof_url = await storage.getSignedUrl(investment.ted_proof_url)

  return investment
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
  const investor = await repositoryInvestor.getById(data.id_investor)

  await validateInvestor(investor)
  await validateFundraising(data)
  await validateInvestimet(data)

  const investment = await dao.create(data)

  sendCreatedEmail(investor, investment)

  return investment
}

const validateInvestor = async investor => {
  if (!investor) throw constants.investment.error.INVESTOR_NOT_FOUND

  if (env().BLACK_LIST.includes(investor.cpf) || env().BLACK_LIST.includes(investor.cnpj)) throw constants.investment.error.BLACK_LIST
}

const validateFundraising = async data => {
  const fundraising = await repositoryFundraising.getById(data.id_fundraising)

  if (!fundraising || data.amount < fundraising.investment_min_value) throw constants.investment.error.MIN_VALUE
}

const validateInvestimet = async data => {
  const yearAmout = await dao.getInvestedAmountOnYear(data.id_investor)
  const MAX_AMOUNT_NOT_QUALIFIED = parseFloat(env().INVESTMENT_MAX_AMOUNT_NOT_QUALIFIED)
  const MAX_AMOUNT_QUALIFIED = parseFloat(env().INVESTMENT_MAX_AMOUNT_QUALIFIED)

  if (!data.is_qualified && (yearAmout > MAX_AMOUNT_NOT_QUALIFIED || yearAmout + data.amount > MAX_AMOUNT_NOT_QUALIFIED))
    throw constants.investment.error.MAX_AMOUNT_NOT_QUALIFIED

  if (data.is_qualified && (yearAmout > MAX_AMOUNT_QUALIFIED || yearAmout + data.amount > MAX_AMOUNT_QUALIFIED))
    throw constants.investment.error.MAX_AMOUNT_QUALIFIED
}

const sendCreatedEmail = (investor, investment) => {
  mailer.sendEmail({
    from: `Buildinvest <${env().buildinvest.emails.contact}>`,
    to: investor.email,
    subject: 'Buildinvest - Novo investimento',
    template: 'newInvestment',
    context: {
      buildinvest: {
        bankAccount: env().buildinvest.bankAccount,
        agence: env().buildinvest.agence
      },
      investor,
      investment
    }
  })
}

/**
 * Send TED proof for an Investment
 *
 * @param {object} file - TED proof
 * @param {string} id - Investment ID
 * @param {string} idInvestor - Investor ID
 * @returns - Returns a object
 */
export const sendTED = async (file, id, idInvestor) => {
  return dao.sendTED(await storage.uploadFile(file, `teds/${id}`), id, idInvestor)
}

/**
 * Confirm an Investment
 *
 * @param {object[]} investments - Investment IDs
 * @returns - Returns a object
 */
export const confirm = async investments => {
  if (!Array.isArray(investments)) throw constants.investment.error.INVALID_DATA

  await dao.confirm(investments)

  // TODO
  // Manda email para custodiadora
  // mailer.sendEmail()

  return true
}

/**
 * Cancel an Investment
 *
 * @param {string} id - Investment ID
 * @param {string} idInvestor - Investor ID
 * @returns - Returns a object
 */
export const cancel = (id, idInvestor) => {
  const investment = getById(id)

  if (!investment || investment.ted_proof_url !== null) throw constants.investment.error.INVALID_CANCEL

  return dao.cancel(id, idInvestor)
}
