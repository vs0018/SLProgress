'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Goals', [{
      title: "ID objects",
      definition: "Given a verbal label, John will identify 5 common objects",
      accuracy: 80,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      title: "Name objects",
      definition: "Given a concrete item, Jane will label 5 common objects",
      accuracy: 80,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Goals', [{
      firstName: 'John'
    }])
  }
};
