export default (sequelize, DataTypes) => {
    
    const InvestorDocument = sequelize.define('InvestorDocument', {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        id_investor: {
            type: DataTypes.UUID,
            allowNull: false
        },

        url: {
            type: DataTypes.STRING,
            allowNull: false
        },

        order: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'investor_document'
    });

    // Associations
    InvestorDocument.associate = function (models) {
        InvestorDocument.belongsTo(models.Investor, { foreignKey: "id_investor", as: "investor" });
    };

    return InvestorDocument;
};