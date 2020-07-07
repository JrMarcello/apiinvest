export default (sequelize, DataTypes) => {
    
    const BuilderPhone = sequelize.define('BuilderPhone', {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        id_builder: {
            type: DataTypes.UUID,
            allowNull: false
        },

        number: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    }, {
        tableName: 'builder_phone'
    });

    // Associations
    BuilderPhone.associate = function (models) {
        BuilderPhone.belongsTo(models.Builder, { foreignKey: "id_builder", as: "builder" });
    };

    return BuilderPhone;
};