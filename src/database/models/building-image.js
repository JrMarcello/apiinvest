export default (sequelize, DataTypes) => {
  const BuildingImage = sequelize.define(
    'BuildingImage',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      id_building: {
        type: DataTypes.UUID,
        allowNull: false
      },

      url: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'building_image'
    }
  )

  // Associations
  BuildingImage.associate = models => {
    BuildingImage.belongsTo(models.Building, { foreignKey: 'id_building', as: 'building' })
  }

  return BuildingImage
}
