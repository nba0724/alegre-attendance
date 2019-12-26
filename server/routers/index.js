const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.get("/", controllers.api_user_controller.index);

module.exports = router;
