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
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull:false
    },
    site: {
      type: DataTypes.STRING
    },
    parentName: {
      type: DataTypes.STRING
    },
    parentEmail: {
      type: DataTypes.STRING
    }
  });
    // Client.associate = models => {
    //   Client.hasMany(models.Goal);
    //   Client.belongsTo(models.Clinician);
    // };
  return Client;
};