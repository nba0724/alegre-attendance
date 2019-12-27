const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

/* API of controling Users */
router.get("/users/", controllers.api_user_controller.index);
router.get("/users/:line_id", controllers.api_user_controller.show);
// router.post("/users/", controllers.api_user_controller.create);
// router.put("/users/:line_id", controllers.api_user_controller.update);
module.exports = router;
