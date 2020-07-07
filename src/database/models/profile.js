export default (sequelize, DataTypes) => {
    
    const Profile = sequelize.define('profile', {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
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

    return Profile;
};