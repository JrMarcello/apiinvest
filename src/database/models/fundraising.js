export default (sequelize, DataTypes) => {
    
    const Foundraising = sequelize.define('Foundraising', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },

        id_building: {
            type: DataTypes.UUID,
            allowNull: false
        },

        id_custodian: {
            type: DataTypes.UUID,
            allowNull: false
        },

        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },

        investment_min_value: {
            type: DataTypes.DECIMAL,
            defaultValue: 1000,
            allowNull: false
        },

        investment_percentage: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },

        return_date: DataTypes.DATE,

        initial_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },

        final_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },

        finished: {
            type: DataTypes.BOOLEAN, 
            defaultValue: false,
            allowNull: false
        },

        ted_proof_url: DataTypes.STRING,

        active: {
            type: DataTypes.BOOLEAN, 
            defaultValue: true,
            allowNull: false
        }
    }, {
        tableName: 'foundraising'
    });

    // Associations
    Foundraising.associate = function (models) {
        Foundraising.belongsTo(models.Building, { foreignKey: "id_building", as: "building" });
        Foundraising.belongsTo(models.Custodian, { foreignKey: "id_custodian", as: "custodian" });
    };

    return Foundraising;
};