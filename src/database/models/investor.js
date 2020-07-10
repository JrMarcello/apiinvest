export default (sequelize, DataTypes) => {
  const Investor = sequelize.define(
    'Investor',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },

      id_user: {
        type: DataTypes.UUID,
        allowNull: false
      },

      cpf: DataTypes.STRING(11),
      cnpj: DataTypes.STRING(14),

      name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      company_name: DataTypes.STRING,

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
        allowNull: false
      },

      address_cep: {
        type: DataTypes.STRING(8),
        allowNull: false
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
    },
    {
      tableName: 'investor'
    }
  )

  // Associations
  Investor.associate = models => {
    Investor.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' })
    Investor.hasMany(models.Investment, { foreignKey: 'id_investor', as: 'investments' })
  }

  return Investor
}
