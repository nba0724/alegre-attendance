const express = require("express");
const router = express.Router();
const controllers = require("../controllers");
const user_validator = require("../validator/user_validators");

/* API of controling Users */
router.get("/users", controllers.api_user_controller.indexs);
router.get("/users/:line_id", controllers.api_user_controller.show);
router.get(
  "/users/:line_id/reservations/",
  controllers.api_user_controller.userReservation
);
router.post("/users/", user_validator, controllers.api_user_controller.create);
router.put("/users/:line_id", controllers.api_user_controller.update);

module.exports = router;
