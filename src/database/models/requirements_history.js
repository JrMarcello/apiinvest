export default (sequelize, DataTypes) => {
  const RequirementsHistory = sequelize.define(
    'RequirementsHistory',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      id_investor: {
        type: DataTypes.UUID,
        allowNull: false
      },

      id_investment: {
        type: DataTypes.UUID,
        allowNull: false
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
      }
    },
    {
      tableName: 'requirements_history'
    }
  )

  // Associations
  RequirementsHistory.associate = models => {
    RequirementsHistory.belongsTo(models.Investor, { foreignKey: 'id_investor', as: 'investor' })
    RequirementsHistory.belongsTo(models.Investment, { foreignKey: 'id_investment', as: 'investment' })
  }

  return RequirementsHistory
}
