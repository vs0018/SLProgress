'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clients', [{
      firstName : 'John',
      lastName : 'Doe',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      firstName : 'Jane',
      lastName : 'Smith',
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Clients', [{
      firstName : 'John',
      firstName : 'Jane'
    }])
  }
};