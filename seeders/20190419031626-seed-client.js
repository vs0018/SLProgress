'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clients', [{
      firstName : 'John',
      lastName : 'Doe',
      birthdate : new Date(),
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      firstName : 'Jane',
      lastName : 'Smith',
      birthdate : new Date(),
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Clients', [{
      firstName :'John'
    }])
  }
};