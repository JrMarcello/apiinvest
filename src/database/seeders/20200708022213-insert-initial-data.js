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
        id: '647ac188-62c8-4618-8a0a-be14174aac49',
        id_profile: 3,
        email: 'admin@buildinvest.com.br',
        username: 'Admin',
        password: '$2b$10$fnSSlO99c4HpOHGJS4WcmOdjyjV7GR4YgFg2SUR1qxUuOZomBPyv2',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])

    await queryInterface.bulkInsert('investor', [
      {
        id: '647ac188-62c8-4618-8a0a-be14174aac49',
        id_user: '647ac188-62c8-4618-8a0a-be14174aac49',
        cpf: '69629586410',
        name: 'Administrador Buildinvest',
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
        id: '647ac188-62c8-4618-8a0a-be14174aac49',
        id_user: '647ac188-62c8-4618-8a0a-be14174aac49',
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
        id: '647ac188-62c8-4618-8a0a-be14174aac49',
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
      id: '647ac188-62c8-4618-8a0a-be14174aac49'
    })

    await queryInterface.bulkDelete('investor', {
      id: '647ac188-62c8-4618-8a0a-be14174aac49'
    })

    await queryInterface.bulkDelete('builder', {
      id: '647ac188-62c8-4618-8a0a-be14174aac49'
    })

    await queryInterface.bulkDelete('custodian', {
      id: '647ac188-62c8-4618-8a0a-be14174aac49'
    })
  }
}
