const bcrypt = require('bcrypt')
const uuid = require('uuid').v4

const userId = uuid()
const investorId = uuid()
const builderId = uuid()
const custodianId = uuid()
const today = new Date()

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('profile', [
      {
        name: 'Investidor',
        created_at: today,
        updated_at: today
      },
      {
        name: 'Construtor',
        created_at: today,
        updated_at: today
      },
      {
        name: 'Admin',
        created_at: today,
        updated_at: today
      }
    ])

    await queryInterface.bulkInsert('user', [
      {
        id: userId,
        id_profile: 3,
        email: 'admin@buildinvest.com.br',
        username: 'Admin',
        password: bcrypt.hashSync('123456', 10),
        created_at: today,
        updated_at: today
      }
    ])

    await queryInterface.bulkInsert('investor', [
      {
        id: investorId,
        id_user: userId,
        cpf: '69629586410',
        name: 'Administrador Buildinvest',
        email: 'investor@buildinvest.com.br',
        address_street: 'Rua do Administrador',
        address_number: '123',
        address_neighborhood: 'Bairro',
        address_city: 'Cidade',
        address_state: 'Estado',
        address_cep: '58000000',
        terms: true,
        created_at: today,
        updated_at: today
      }
    ])

    await queryInterface.bulkInsert('builder', [
      {
        id: builderId,
        id_user: userId,
        cnpj: '34096667000151',
        company_name: 'Construtora Padrão SA',
        company_fancy_name: 'Construtora Padrão',
        address_street: 'Rua da Construtora',
        address_number: '123',
        address_neighborhood: 'Bairro',
        address_city: 'Cidade',
        address_state: 'Estado',
        address_cep: '58000000',
        created_at: today,
        updated_at: today
      }
    ])

    await queryInterface.bulkInsert('custodian', [
      {
        id: custodianId,
        cnpj: '34096667000151',
        company_name: 'Custodiadora Padrão SA',
        company_fancy_name: 'Custodiadora Padrão',
        phone: '8333334444',
        created_at: today,
        updated_at: today
      }
    ])

    await queryInterface.bulkInsert('bank_account', [
      {
        reference_id: custodianId,
        reference_entity: 'custodian',
        bank_code: '001',
        agency: '1234',
        account: '123456789',
        active: true,
        created_at: today,
        updated_at: today
      }
    ])
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('profile', null)

    await queryInterface.bulkDelete('user', {
      id: userId
    })

    await queryInterface.bulkDelete('investor', {
      id: investorId
    })

    await queryInterface.bulkDelete('builder', {
      id: builderId
    })

    await queryInterface.bulkDelete('custodian', {
      id: custodianId
    })
  }
}
