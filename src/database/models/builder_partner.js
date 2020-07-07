export default (sequelize, DataTypes) => {
    
    const BuilderPartner = sequelize.define('builder_partner', {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        id_builder: {
            type: DataTypes.UUID,
            allowNull: false
        },

        cpf: {
            type: DataTypes.STRING(11),
            unique: true,
            allowNull: false
        },

        cnpj: {
            type: DataTypes.STRING(14),
            unique: true,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        company_name: DataTypes.STRING,

        phone: {
            type: DataTypes.STRING,
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
        address_neighborhood: DataTypes.STRING,
        address_city: DataTypes.STRING,
        address_state: DataTypes.STRING,

        address_country: {
            type: DataTypes.STRING,
            defaultValue: "Brasil",
        },

        address_cep: DataTypes.STRING(8)

        // Created At
        // Updated At
    });

    // Associations
    BuilderPartner.associate = function (models) {
        BuilderPartner.belongsTo(models.Builder, { foreignKey: "id_builder", as: "builder" });
    };

    return BuilderPartner;
};