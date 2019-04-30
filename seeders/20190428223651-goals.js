'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Goals', [{
      goalType: "ID objects",
      desc: "Given a verbal label, John will identify 5 common objects",
      accuracy: 80,
      clientID: 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      goalType: "Name objects",
      desc: "Given a concrete item, Jane will label 5 common objects",
      accuracy: 80,
      clientID: 2,
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
