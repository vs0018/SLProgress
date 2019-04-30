const router = require("express").Router();
const clientRoutes = require("./clients");
const sessionRoutes = require("./session");
const goalsRoutes = require("./goals");

// Client routes
router.use("/clients", clientRoutes);

// Session routes
router.use("/session", sessionRoutes);

// Goal routes
router.use("/goals", goalsRoutes);

module.exports = router;