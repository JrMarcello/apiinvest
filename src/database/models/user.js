export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },

      id_profile: {
        type: DataTypes.UUID,
        allowNull: false
      },

      id_facebook: DataTypes.STRING,
      facebook_access_token: DataTypes.STRING,
      id_google: DataTypes.STRING,
      google_access_token: DataTypes.STRING,

      email: {
        type: DataTypes.STRING,
        allowNull: false
      },

      username: {
        type: DataTypes.STRING,
        allowNull: true
      },

      password: {
        type: DataTypes.STRING,
        allowNull: true
      },

      avatar_url: DataTypes.STRING,
      reset_token: DataTypes.STRING,
      reset_expires: DataTypes.DATE,

      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      }
    },
    {
      tableName: 'user'
    }
  )

  // Associations
  User.associate = models => {
    User.belongsTo(models.Profile, { foreignKey: 'id_profile', as: 'profile' })
    User.hasOne(models.Investor, { foreignKey: 'id_user', as: 'investor' })
    User.hasOne(models.Builder, { foreignKey: 'id_user', as: 'builder' })
  }

  return User
}
