module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('phone', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      reference_id: {
        type: DataTypes.UUID,
        allowNull: false
      },

      reference_entity: {
        type: DataTypes.STRING,
        allowNull: false
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

    await queryInterface.createTable('bank_account', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      reference_id: {
        type: DataTypes.UUID,
        allowNull: false
      },

      reference_entity: {
        type: DataTypes.STRING,
        allowNull: false
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
  },

  down: async queryInterface => {
    await queryInterface.dropTable('phone')
    await queryInterface.dropTable('bank_account')
  }
}
