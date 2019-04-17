'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
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
  Client.associate = function(models) {
    Client.belongsTo(models.Clinician, {
      foreignKey: 'clinicianId',

    });
  };
  return Client;
};