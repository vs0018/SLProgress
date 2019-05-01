const router = require("express").Router();
var db = require("../../models");

  // GET route for getting all of the Session data
  router.get("/session", function(req, res) {
    db.Session.findAll({})
      .then(function(dbSession) {
        res.json(dbSession);
      });
  });

  // Get route for retrieving a single Client's session data
  router.get("/session/clients/:id", function(req, res) {
    db.Session.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbSession) {
        res.json(dbSession);
      });
  });

  // Route for saving a client to the session
  router.post("/session/clients", function(req, res) {
    console.log(req.body);
    db.Session.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
      .then(function(dbSession) {
        res.json(dbSession);
      });
  });

  // DELETE route for deleting a session
  router.delete("/session", function(req, res) {
    db.Session.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbSession) {
        res.json(dbSession);
      });
  });

  // PUT route for updating a session
  router.put("/session", function(req, res) {
    db.Session.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbSession) {
        res.json(dbSession);
      });
  });

  module.exports = router;