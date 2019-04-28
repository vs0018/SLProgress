const router = require("express").Router();
const clientRoutes = require("./clients");
const sessionRoutes = require("./session");

// Client routes
router.use("/clients", clientRoutes);

// Session routes
router.use("/session", sessionRoutes);

module.exports = router;