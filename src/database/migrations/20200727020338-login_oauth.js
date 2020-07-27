module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('user', 'facebook_access_token', { type: Sequelize.STRING })
    await queryInterface.addColumn('user', 'google_access_token', { type: Sequelize.STRING })
  },

  down: async queryInterface => {
    await queryInterface.removeColumn('user', 'facebook_access_token')
    await queryInterface.removeColumn('user', 'google_access_token')
  }
}
