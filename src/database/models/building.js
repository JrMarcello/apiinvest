export default (sequelize, DataTypes) => {
  const Building = sequelize.define(
    'Building',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },

      id_builder: {
        type: DataTypes.UUID,
        allowNull: false
      },

      cnpj: {
        type: DataTypes.STRING(14),
        unique: true
      },

      registration: {
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: false
      },

      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },

      description: DataTypes.TEXT,

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
        defaultValue: 'Brasil'
      },

      address_cep: {
        type: DataTypes.STRING(8),
        allowNull: false
      },

      vgv: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },

      initial_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
      },

      final_date: DataTypes.DATE,

      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      }
    },
    {
      tableName: 'building'
    }
  )

  // Associations
  Building.associate = models => {
    Building.belongsTo(models.Builder, { foreignKey: 'id_builder', as: 'builder' })
    Building.hasMany(models.Fundraising, { foreignKey: 'id_building', as: 'fundraisings' })
    Building.hasMany(models.Document, { foreignKey: 'reference_id', as: 'documents' })
  }

  return Building
}
