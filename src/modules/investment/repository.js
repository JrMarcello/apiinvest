import * as mailer from '@core/mailer'
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
 * Saves an Investment in database
 *
 * @param {Object} data - Investment data to be saved
 * @returns {Promisse} - Returns a Promisse
 */
export const create = async data => {
  const investor = await getInvestor(data.id_investor)

  if (!investor || !investorIsEnableToInvestments(investor)) throw Error('Usuario não pode realizar invetimento')

  const investment = await dao.create(data)

  mailer.sendEmail({
    from: 'contato@buildinvest.com',
    to: investor.email,
    subject: 'Buildinvest - Novo investimento cadastrado',
    html: `<h2>Parabens! Você realizou um novo investimento</h2><p>Olá <b>${investor.username}</b></p>`
  })

  return investment
}

const investorIsEnableToInvestments = investor => {
  return !!investor
}

/**
 * Updates an Investment
 *
 * @param {Object} data - Investment data to be updated
 * @returns {Promisse} - Returns a Promisse
 */
export const update = data => {
  const updateble = {
    id: data.id,
    spe: data.spe,
    matricula: data.matricula,
    nome: data.nome,
    descricao: data.descricao,
    endereco: data.endereco,
    valor: data.valor,
    data_inicio: data.data_inicio,
    data_fim: data.data_fim
  }

  return dao.update(updateble)
}

/**
 * Remove a Investment
 *
 * @param {Object} id - Investment id
 * @returns {Function} - Returns a Promisse
 */
export const remove = id => {
  return dao.remove(id)
}
