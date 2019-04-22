'use strict';
module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define('Goal', {
    title: DataTypes.STRING,
    definition: DataTypes.TEXT,
    accuracy: DataTypes.INTEGER
  });
  // Goal.associate = function(models) {
  //   Goal.belongsTo(models.Client, {
  //     foreignKey: 'clientId'
  //   });
  // };
  return Goal;
};