export default (sequelize, DataTypes) => {
    
    const InvestorPhone = sequelize.define('investor_phone', {

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

        // Created At
        // Updated At
    });

    // Associations
    InvestorPhone.associate = function (models) {
        InvestorPhone.belongsTo(models.Investor, { foreignKey: "id_investor", as: "investor" });
    };

    return InvestorPhone;
};