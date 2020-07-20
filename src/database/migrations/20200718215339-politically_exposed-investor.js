module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('investor', 'politically_exposed_person', { type: Sequelize.BOOLEAN, defaultValue: false })
  },

  down: async queryInterface => {
    await queryInterface.removeColumn('investor', 'politically_exposed_person')
  }
}
