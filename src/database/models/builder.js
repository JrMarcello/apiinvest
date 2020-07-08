export default (sequelize, DataTypes) => {
    
    const Builder = sequelize.define('Builder', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },

        id_user: {
            type: DataTypes.UUID,
            allowNull: false
        },

        cnpj: {
            type: DataTypes.STRING(14),
            unique: true,
            allowNull: false
        },

        company_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        company_fancy_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        address_street: {
            type: DataTypes.STRING,
            allowNull: false
        },

        address_number: {
            type: DataTypes.STRING,
            defaultValue: 'SN',
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
            defaultValue: 'Brasil',
            allowNull: false,
        },

        address_cep: {
            type: DataTypes.STRING(8),
            allowNull: false,
        },

        logo_url: DataTypes.STRING,

        active: {
            type: DataTypes.BOOLEAN, 
            defaultValue: true,
            allowNull: false
        }
    }, {
        tableName: 'builder'
    });

    // Associations
    Builder.associate = function (models) {
        Builder.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' });
        Builder.hasMany(models.Building, { foreignKey: 'id_builder', as: 'buildings' });
    };

    return Builder;
};