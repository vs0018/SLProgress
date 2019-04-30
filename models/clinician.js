'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clinician = sequelize.define('Clinician', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  });
  // Clinician.associate = function(models) {
  //   Clinician.hasMany(models.Client);
  // };
  return Clinician;
};