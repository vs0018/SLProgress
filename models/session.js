'use strict';
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    ClientId: {
      type: DataTypes.INTEGER
    }
  });
  // Session.associate = function(models) {
  //   Session.hasMany(models.Client, {
  //     foreignKey: 'clientId',
  //     as: 'clients'
  //   });
  // };
  return Session;
};