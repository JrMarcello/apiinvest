export default (sequelize, DataTypes) => {
  const Investment = sequelize.define(
    'Investment',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },

      id_investor: {
        type: DataTypes.UUID,
        allowNull: false
      },

      id_fundraising: {
        type: DataTypes.UUID,
        allowNull: false
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
      anonymous: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      tableName: 'investment'
    }
  )

  // Associations
  Investment.associate = models => {
    Investment.belongsTo(models.Investor, { foreignKey: 'id_investor', as: 'investor' })
    Investment.belongsTo(models.Fundraising, { foreignKey: 'id_fundraising', as: 'fundraising' })
  }

  return Investment
}
