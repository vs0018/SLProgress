module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define('posts', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
  });
  return Post;
};