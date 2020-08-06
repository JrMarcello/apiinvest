export default (sequelize, DataTypes) => {
  const Phone = sequelize.define(
    'Phone',
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

      number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      }
    },
    {
      tableName: 'phone'
    }
  )

  return Phone
}
