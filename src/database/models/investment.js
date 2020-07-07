export default (sequelize, DataTypes) => {
    
    const Investment = sequelize.define('investment', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },

        id_investor: {
            type: DataTypes.UUID,
            allowNull: false
        },

        id_foundrising: {
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
        }

        // Created At
        // Updated At
    });

    // Associations
    Investment.associate = function (models) {
        Investment.belongsTo(models.Investor, { foreignKey: "id_investor", as: "investor" });
        Investment.belongsTo(models.Foundrising, { foreignKey: "id_foundraising", as: "foundraising" });
    };

    return Investment;
};