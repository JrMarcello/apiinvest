export default (sequelize, DataTypes) => {
    
    const User = sequelize.define('user', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },

        id_profile: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false
        },

        id_facebook: DataTypes.STRING,
        id_google: DataTypes.STRING,

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        avatar_url: DataTypes.STRING,
        reset_token: DataTypes.STRING,

        active: {
            type: DataTypes.BOOLEAN, 
            defaultValue: true,
            allowNull: false
        }

        // Created At
        // Updated At
        // Reset Expires
    });

    // Associations
    User.associate = function (models) {
        User.belongsTo(models.Profile, { foreignKey: "id_profile", as: "profile" });
    };

    return User;
};