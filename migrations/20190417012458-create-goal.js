'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Goals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      goalType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      desc: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      accuracy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      clientID: {
        type: Sequelize.INTEGER
      },
      // clientId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //       model: 'clients',
      //       key: 'id'
      //   },
      //   onUpdate: 'cascade',
      //   onDelete: 'cascade'
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Goals');
  }
};