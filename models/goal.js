'use strict';
module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define('Goal', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: DataTypes.STRING,
    definition: DataTypes.TEXT,
    accuracy: DataTypes.INTEGER
  });
    Goal.associate = function(models) {
      Goal.belongsTo(models.Client);
    };
  return Goal;
};