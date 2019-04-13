var db = require('../models');
const epilogue = require('epilogue');

module.exports = function(app) {
  // Using Epiloque for REST endpoints and controllers
  epilogue.initialize({ app, sequelize: db.sequelize });

  epilogue.resource({
    model: db.Post,
    endpoints: ['/posts', '/posts/:id'],
  });
};