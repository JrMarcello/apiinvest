module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.addColumn('fundraising', 'status', {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    })

    await queryInterface.removeColumn('fundraising', 'finished')
    await queryInterface.removeColumn('fundraising', 'active')

    await queryInterface.addColumn('investment', 'status', {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    })

    await queryInterface.removeColumn('investment', 'confirmed')
    await queryInterface.removeColumn('investment', 'active')
  },

  down: async queryInterface => {
    await queryInterface.removeColumn('investment', 'status')
    await queryInterface.removeColumn('fundraising', 'status')
  }
}
