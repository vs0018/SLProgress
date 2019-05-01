'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    lastName: {
      type: DataTypes.STRING,
      allowNull:false
    },
    inSession: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
  });
    Client.associate = models => {
      Client.hasMany(models.Goal);
    };
  return Client;
};