module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('requirements_history', {
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

      id_investment: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'investment',
          key: 'id'
        }
      },

      invested_other_platforms: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },

      self_declaration: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      use_terms: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable('requirements_history')
  }
}
