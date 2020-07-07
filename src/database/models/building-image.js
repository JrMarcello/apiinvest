export default (sequelize, DataTypes) => {
    
    const BuildingImage = sequelize.define('building_image', {

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
        },

        // Created At
        // Updated At
    });

    // Associations
    BuildingImage.associate = function (models) {
        BuildingImage.belongsTo(models.Building, { foreignKey: "id_building", as: "building" });
    };

    return BuildingImage;
};