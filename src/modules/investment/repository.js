import * as mailer from '../../core/mailer'
import * as storage from '../../core/storage'
import { env } from '../../common/utils'
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
export const getById = (id, idInvestor) => {
  return dao.getById(id, idInvestor)
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

  if (!investor) throw Error('Complete seu cadastro para começar a investir')

  if (env().BLACK_LIST.includes(investor.cpf) || env().BLACK_LIST.includes(investor.cnpj))
    throw Error('Socios não podem realizar investimentos')

  const fundraising = await repositoryFundraising.getById(data.id_fundraising)

  if (!fundraising || data.amount < fundraising.investment_min_value) throw Error('Valor abaixo do mínimo nescessário')

  const yearAmout = await dao.getInvestedAmountOnYear(data.id_investor)
  const MAX_AMOUNT_NOT_QUALIFIED = parseFloat(env().INVESTMENT_MAX_AMOUNT_NOT_QUALIFIED)
  const MAX_AMOUNT_QUALIFIED = parseFloat(env().INVESTMENT_MAX_AMOUNT_QUALIFIED)

  if (!data.is_qualified && (yearAmout > MAX_AMOUNT_NOT_QUALIFIED || yearAmout + data.amount > MAX_AMOUNT_NOT_QUALIFIED))
    throw Error('Limite de investimentos excedido para investidor não qualificado')

  if (data.is_qualified && (yearAmout > MAX_AMOUNT_QUALIFIED || yearAmout + data.amount > MAX_AMOUNT_QUALIFIED))
    throw Error('Limite de investimentos excedido')

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
    from: `Buildinvest <${env().buildinvest.emails.contact}>`,
    to: investor.email,
    subject: 'Buildinvest - Novo investimento',
    template: 'newInvestment',
    context: {
      buildinvest: {
        bankAccount: env().buildinvest.bankAccount,
        agence: env().buildinvest.agence
      },
      investor
    }
  }
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
  if (!file) throw Error('Comprovante de TED não anexado')

  const url = await storage.uploadFile(file, `teds/${id}`)

  return dao.sendTED(url, id, idInvestor)
}

/**
 * Confirm an Investment
 *
 * @param {object[]} investments - Investment IDs
 * @returns - Returns a object
 */
export const confirm = async investments => {
  if (!Array.isArray(investments)) throw Error('Formato de dados inválido')

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

  if (!investment || investment.ted_proof_url !== null) throw new Error('Não é possivel cancelar investimentos com TED e/ou confirmados!')

  return dao.cancel(id, idInvestor)
}
