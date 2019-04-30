const router = require("express").Router();
var db = require("../../models");

  // Route for saving a new Goal
  router.post("/", function(req, res) {
    console.log(req.body);
    db.Goal.create({
      goalType: req.body.type,
      desc: req.body.desc,
      accuracy: req.body.accuracy,
      clientID: req.body.clientId
    })
      .then(function(dbGoal) {
        res.json(dbGoal);
      });
  });

  module.exports = router;