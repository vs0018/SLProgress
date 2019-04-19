'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Client', [{
      firstName : 'John',
      lastName : 'Doe',
      birthdate : new Date(),
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Client', [{
      firstName :'John'
    }])
  }
};