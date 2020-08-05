export default (sequelize, DataTypes) => {
  const Document = sequelize.define(
    'Document',
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

      name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      description: {
        type: DataTypes.STRING
      },

      url: {
        type: DataTypes.STRING,
        allowNull: false
      },

      type: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: 'document'
    }
  )

  return Document
}
