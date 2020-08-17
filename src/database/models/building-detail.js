export default (sequelize, DataTypes) => {
    const BuildingDetail = sequelize.define(
        'BuildingDetail',
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

            title: {
                type: DataTypes.STRING,
                allowNull: false
            },

            content: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        },
        {
            tableName: 'building_detail'
        }
    )

    // Associations
    BuildingDetail.associate = models => {
        BuildingDetail.belongsTo(models.Building, { foreignKey: 'id_building', as: 'building' })
    }

    return BuildingDetail
}
