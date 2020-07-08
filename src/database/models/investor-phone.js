export default (sequelize, DataTypes) => {
  const InvestorPhone = sequelize.define(
    'InvestorPhone',
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

      number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      }
    },
    {
      tableName: 'investor_phone'
    }
  )

  // Associations
  InvestorPhone.associate = models => {
    InvestorPhone.belongsTo(models.Investor, { foreignKey: 'id_investor', as: 'investor' })
  }

  return InvestorPhone
}
