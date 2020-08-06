module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.addColumn('investment', 'confirmed_at', {
      type: DataTypes.DATE,
      allowNull: true
    })
  },

  down: async queryInterface => {
    await queryInterface.removeColumn('investment', 'confirmed_at')
  }
}
