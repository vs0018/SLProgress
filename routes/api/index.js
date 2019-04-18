const router = require("express").Router();
const clientRoutes = require("./clients");

// Client routes
router.use("/clients", clientRoutes);

module.exports = router;