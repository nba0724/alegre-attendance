var express = require("express");
var router = express.Router();
var controllers = require("../controllers");

/* API of controling Users */
router.get("/User/", controllers.api_user_controller.index);

module.exports = router;
