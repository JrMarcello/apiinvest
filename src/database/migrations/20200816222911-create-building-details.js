module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('building_detail', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      id_building: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'building',
          key: 'id'
        }
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false
      },

      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },

      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })

    await queryInterface.addColumn('document', 'category', {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    })
  },

  down: async queryInterface => {
    await queryInterface.dropTable('building_detail')
    await queryInterface.removeColumn('document', 'category')
  }
}
