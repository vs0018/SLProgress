var db = require("../models");

// Routes
// =============================================================
module.exports = (app) => {

  // GET route for getting all of the Clients
  app.get("/api/Clients/", function(req, res) {
    db.Client.findAll({})
      .then(function(dbClient) {
        res.json(dbClient);
      });
  });

  // Get route for returning Clients of a specific category
  app.get("/api/Clients/category/:category", function(req, res) {
    db.Client.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbClient) {
        res.json(dbClient);
      });
  });

  // Get route for retrieving a single Client
  app.get("/api/Clients/:id", function(req, res) {
    db.Client.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbClient) {
        res.json(dbClient);
      });
  });

  // Client route for saving a new Client
  app.Client("/api/Clients", function(req, res) {
    console.log(req.body);
    db.Client.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbClient) {
        res.json(dbClient);
      });
  });

  // DELETE route for deleting Clients
  app.delete("/api/Clients/:id", function(req, res) {
    db.Client.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbClient) {
        res.json(dbClient);
      });
  });

  // PUT route for updating Clients
  app.put("/api/Clients", function(req, res) {
    db.Client.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbClient) {
        res.json(dbClient);
      });
  });
};