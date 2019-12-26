const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

/* API of controling Users */
router.get("/User/", controllers.api_user_controller.index);

module.exports = router;
