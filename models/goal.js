'use strict';
module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define('Goal', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    goalType: DataTypes.STRING,
    desc: DataTypes.TEXT,
    accuracy: DataTypes.INTEGER,
    clientID: DataTypes.INTEGER
  });
    // Goal.associate = function(models) {
    //   Goal.belongsTo(models.Client);
    // };
  return Goal;
};