'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn( 'Client', 'lastName', Sequelize.STRING );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn( 'Client', 'lastName' );
  }
};
