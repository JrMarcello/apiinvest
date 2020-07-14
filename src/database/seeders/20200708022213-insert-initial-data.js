const bcrypt = require('bcrypt');
const uuid = require('uuid').v4;

const id_user = uuid();
const id_investor = uuid();
const id_builder = uuid();
const id_custodian = uuid();

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('profile', [
      {
        name: 'Investidor',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Construtor',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Admin',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])

    await queryInterface.bulkInsert('user', [
      {
        id: id_user,
        id_profile: 3,
        email: 'admin@buildinvest.com.br',
        username: 'Admin',
        password: bcrypt.hashSync('123456', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ])

    await queryInterface.bulkInsert('investor', [
      {
        id: id_investor,
        id_user: id_user,
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
        created_at: new Date(),
        updated_at: new Date()
      }
    ])

    await queryInterface.bulkInsert('builder', [
      {
        id: id_builder,
        id_user: id_user,
        cnpj: '34096667000151',
        company_name: 'Construtora Padrão SA',
        company_fancy_name: 'Construtora Padrão',
        address_street: 'Rua da Construtora',
        address_number: '123',
        address_neighborhood: 'Bairro',
        address_city: 'Cidade',
        address_state: 'Estado',
        address_cep: '58000000',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])

    await queryInterface.bulkInsert('custodian', [
      {
        id: id_custodian,
        cnpj: '34096667000151',
        company_name: 'Custodiadora Padrão SA',
        company_fancy_name: 'Custodiadora Padrão',
        phone: '8333334444',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('profile', null)

    await queryInterface.bulkDelete('user', {
      id: id_user
    })

    await queryInterface.bulkDelete('investor', {
      id: id_investor
    })

    await queryInterface.bulkDelete('builder', {
      id: id_builder
    })

    await queryInterface.bulkDelete('custodian', {
      id: id_custodian
    })
  }
}
