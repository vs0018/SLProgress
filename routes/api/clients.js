const router = require("express").Router();
var db = require("../../models");

  // GET route for getting all of the Clients
  router.get("/", function(req, res) {
    db.Client.findAll({})
      .then(function(dbClient) {
        res.json(dbClient);
      });
  });

  // Get route for retrieving a single Client
  router.get("/id/:id", function(req, res) {
    db.Client.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbClient) {
        res.json(dbClient);
      });
  });

  // GET route for getting all of the Clients in Session
  router.get("/session", function(req, res) {
    db.Client.findAll({
      where: {
        inSession: true
      }
    })
      .then(function(dbClient) {
        res.json(dbClient);
      });
  });

  // Client route for saving a new Client
  router.post("/", function(req, res) {
    console.log(req.body);
    db.Client.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthdate: req.body.birthdate,
      site: req.body.site,
      parentName: req.body.parname,
      parentEmail: req.body.paremail
    })
      .then(function(dbClient) {
        res.json(dbClient);
      });
  });

  // DELETE route for deleting Clients
  router.delete("/:id", function(req, res) {
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
  router.put("/", function(req, res) {
    db.Client.update(req.body,
      {
        where: {
          id: req.body.clientId
        }
      })
      .then(function(dbClient) {
        res.json(dbClient);
      });
  });

  module.exports = router;