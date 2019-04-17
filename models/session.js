'use strict';
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    dayOfWeek: {
      type: DataTypes.STRING
    },
    time: {
      type: DataTypes.INTEGER
    }
  });
  Session.associate = function(models) {
    Session.hasMany(models.Client, {
      foreignKey: 'clientId',
      as: 'clients')
  };
  return Session;
};