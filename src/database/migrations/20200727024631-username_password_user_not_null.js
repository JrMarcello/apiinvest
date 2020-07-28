module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('user', 'password', {
      type: Sequelize.STRING,
      allowNull: true
    })
    await queryInterface.changeColumn('user', 'username', {
      type: Sequelize.STRING,
      allowNull: true
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('user', 'password', {
      type: Sequelize.STRING,
      allowNull: false
    })
    await queryInterface.changeColumn('user', 'username', {
      type: Sequelize.STRING,
      allowNull: false
    })
  }
}
