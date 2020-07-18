'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('investment', 'anonymous', { type: Sequelize.BOOLEAN, defaultValue: false })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('investment', 'anonymous')
  }
}
