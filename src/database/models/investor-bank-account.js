export default (sequelize, DataTypes) => {
    
    const InvestorBankAccount = sequelize.define('InvestorBankAccount', {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        id_investor: {
            type: DataTypes.UUID,
            allowNull: false
        },

        bank_code: {
            type: DataTypes.STRING(4),
            allowNull: false
        },

        agency: {
            type: DataTypes.STRING,
            allowNull: false
        },

        account: {
            type: DataTypes.STRING,
            allowNull: false
        },

        active: {
            type: DataTypes.BOOLEAN, 
            defaultValue: true,
            allowNull: false
        }
    }, {
        tableName: 'investor_bank_account'
    });

    // Associations
    InvestorBankAccount.associate = function (models) {
        InvestorBankAccount.belongsTo(models.Investor, { foreignKey: "id_investor", as: "investor" });
    };

    return InvestorBankAccount;
};