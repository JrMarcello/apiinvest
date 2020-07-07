export default (sequelize, DataTypes) => {
    
    const Custodian = sequelize.define('custodian', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
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

        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },

        agent_name: DataTypes.STRING,
        agent_email: DataTypes.STRING,
        agent_phone: DataTypes.STRING,

        active: {
            type: DataTypes.BOOLEAN, 
            defaultValue: true,
            allowNull: false
        }

        // Created At
        // Updated At
    });

    return Custodian;
};