module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('profile', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })

    await queryInterface.createTable('user', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },

      id_profile: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'profile',
          key: 'id'
        }
      },

      id_facebook: DataTypes.STRING,
      id_google: DataTypes.STRING,

      email: {
        type: DataTypes.STRING,
        allowNull: false
      },

      username: {
        type: DataTypes.STRING,
        allowNull: false
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false
      },

      avatar_url: DataTypes.STRING,
      reset_token: DataTypes.STRING,
      reset_expires: DataTypes.DATE,

      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })

    await queryInterface.createTable('builder', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },

      id_user: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },

      cnpj: {
        type: DataTypes.STRING(14),
        unique: true,
        allowNull: false
      },

      company_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      company_fancy_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address_street: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address_number: {
        type: DataTypes.STRING,
        defaultValue: 'SN',
        allowNull: false
      },

      address_complement: DataTypes.STRING,

      address_neighborhood: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address_city: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address_state: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address_country: {
        type: DataTypes.STRING,
        defaultValue: 'Brasil',
        allowNull: false
      },

      address_cep: {
        type: DataTypes.STRING(8),
        allowNull: false
      },

      logo_url: DataTypes.STRING,

      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })

    await queryInterface.createTable('builder_partner', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      id_builder: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'builder',
          key: 'id'
        }
      },

      cpf: {
        type: DataTypes.STRING(11),
        unique: true
      },

      cnpj: {
        type: DataTypes.STRING(14),
        unique: true
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      company_name: DataTypes.STRING,

      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address_street: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address_number: {
        type: DataTypes.STRING,
        defaultValue: 'SN',
        allowNull: false
      },

      address_complement: DataTypes.STRING,
      address_neighborhood: DataTypes.STRING,
      address_city: DataTypes.STRING,
      address_state: DataTypes.STRING,

      address_country: {
        type: DataTypes.STRING,
        defaultValue: 'Brasil'
      },

      address_cep: DataTypes.STRING(8),

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })

    await queryInterface.createTable('builder_phone', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      id_builder: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'builder',
          key: 'id'
        }
      },

      number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })

    await queryInterface.createTable('building', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },

      id_builder: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'builder',
          key: 'id'
        }
      },

      cnpj: {
        type: DataTypes.STRING(14),
        unique: true
      },

      registration: {
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: false
      },

      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },

      description: DataTypes.TEXT,

      address_street: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address_number: {
        type: DataTypes.STRING,
        defaultValue: 'SN',
        allowNull: false
      },

      address_complement: DataTypes.STRING,

      address_neighborhood: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address_city: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address_state: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address_country: {
        type: DataTypes.STRING,
        defaultValue: 'Brasil'
      },

      address_cep: {
        type: DataTypes.STRING(8),
        allowNull: false
      },

      vgv: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },

      initial_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
      },

      final_date: DataTypes.DATE,

      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })

    await queryInterface.createTable('building_image', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      id_building: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'building',
          key: 'id'
        }
      },

      url: {
        type: DataTypes.STRING,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })

    await queryInterface.createTable('custodian', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },

      cnpj: {
        type: DataTypes.STRING(14),
        unique: true,
        allowNull: false
      },

      company_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      company_fancy_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },

      agent_name: DataTypes.STRING,
      agent_email: DataTypes.STRING,
      agent_phone: DataTypes.STRING,

      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })

    await queryInterface.createTable('fundraising', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },

      id_building: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'building',
          key: 'id'
        }
      },

      id_custodian: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'custodian',
          key: 'id'
        }
      },

      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },

      investment_min_value: {
        type: DataTypes.DECIMAL,
        defaultValue: 1000,
        allowNull: false
      },

      investment_percentage: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },

      return_date: DataTypes.DATE,

      initial_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
      },

      final_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
      },

      finished: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },

      ted_proof_url: DataTypes.STRING,

      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })

    await queryInterface.createTable('investor', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },

      id_user: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },

      cpf: DataTypes.STRING(11),
      cnpj: DataTypes.STRING(14),

      name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false
      },

      company_name: DataTypes.STRING,

      address_street: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address_number: {
        type: DataTypes.STRING,
        defaultValue: 'SN',
        allowNull: false
      },

      address_complement: DataTypes.STRING,

      address_neighborhood: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address_city: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address_state: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address_country: {
        type: DataTypes.STRING,
        defaultValue: 'Brasil',
        allowNull: false
      },

      address_cep: {
        type: DataTypes.STRING(8),
        allowNull: false
      },

      terms: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },

      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })

    await queryInterface.createTable('investor_bank_account', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      id_investor: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'investor',
          key: 'id'
        }
      },

      bank_code: {
        type: DataTypes.STRING(4),
        allowNull: false
      },

      agency: {
        type: DataTypes.STRING,
        allowNull: false
      },

      account: {
        type: DataTypes.STRING,
        allowNull: false
      },

      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })

    await queryInterface.createTable('investor_document', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      id_investor: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'investor',
          key: 'id'
        }
      },

      url: {
        type: DataTypes.STRING,
        allowNull: false
      },

      order: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })

    await queryInterface.createTable('investor_phone', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      id_investor: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'investor',
          key: 'id'
        }
      },

      number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })

    await queryInterface.createTable('investment', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },

      id_investor: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'investor',
          key: 'id'
        }
      },

      id_fundraising: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'fundraising',
          key: 'id'
        }
      },

      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },

      amount_returned: DataTypes.DECIMAL,

      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
      },

      is_qualified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },

      ted_proof_url: DataTypes.STRING,

      confirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },

      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })
  },

  down: async queryInterface => {
    await queryInterface.dropTable('investment')
    await queryInterface.dropTable('investor_phone')
    await queryInterface.dropTable('investor_document')
    await queryInterface.dropTable('investor_bank_account')
    await queryInterface.dropTable('investor')
    await queryInterface.dropTable('fundraising')
    await queryInterface.dropTable('custodian')
    await queryInterface.dropTable('building_image')
    await queryInterface.dropTable('building')
    await queryInterface.dropTable('builder_phone')
    await queryInterface.dropTable('builder_partner')
    await queryInterface.dropTable('builder')
    await queryInterface.dropTable('user')
    await queryInterface.dropTable('profile')
  }
}
