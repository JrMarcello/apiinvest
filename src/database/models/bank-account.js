export default (sequelize, DataTypes) => {
  const BankAccount = sequelize.define(
    'BankAccount',
    {
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
      }
    },
    {
      tableName: 'bank_account'
    }
  )

  return BankAccount
}
