const router = require("express").Router();
var db = require("../../models");

// Get route for retrieving a single Client's goals
router.get("/:id", function(req, res) {
  db.Goal.findAll({
    where: {
      clientID: req.params.id
    }
  })
    .then(function(dbGoals) {
      res.json(dbGoals);
    });
});

  // Route for saving a new Goal
  router.post("/", function(req, res) {
    console.log(req.body);
    db.Goal.create({
      goalType: req.body.goalType,
      desc: req.body.desc,
      accuracy: req.body.accuracy,
      // clientID: req.body.clientId
    })
      .then(function(dbGoal) {
        res.json(dbGoal);
      });
  });

  module.exports = router;