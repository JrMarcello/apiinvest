export default (sequelize, DataTypes) => {
    
    const Investor = sequelize.define('investor', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },

        id_user: {
            type: DataTypes.UUID,
            allowNull: false
        },

        cpj: {
            type: DataTypes.STRING(11),
            unique: true,
            allowNull: false
        },

        cnpj: {
            type: DataTypes.STRING(14),
            unique: true,
            allowNull: false
        },

        company_name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },

        address_street: {
            type: DataTypes.STRING,
            allowNull: false
        },

        address_number: {
            type: DataTypes.STRING,
            defaultValue: "SN",
            allowNull: false
        },

        address_complement: DataTypes.STRING,

        address_neighborhood: {
            type: DataTypes.STRING,
            allowNull: false
        },

        address_city: {
            type: DataTypes.STRING,
            allowNull: false
        },

        address_state: {
            type: DataTypes.STRING,
            allowNull: false
        },

        address_country: {
            type: DataTypes.STRING,
            defaultValue: "Brasil",
            allowNull: false,
        },

        address_cep: {
            type: DataTypes.STRING(8),
            allowNull: false,
        },

        terms: {
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
    Investor.associate = function (models) {
        Investor.belongsTo(models.User, { foreignKey: "id_user", as: "user" });
    };

    return Investor;
};