const express = require("express");
const router = express.Router();
const controllers = require("../controllers");
const validators = require("../validators");

/* API of controling Users */
router.get("/users", controllers.api_user_controller.index);
router.get("/users/:line_id", controllers.api_user_controller.show);
router.get(
  "/users/:line_id/reservations/",
  controllers.api_user_controller.userReservation
);
router.post(
  "/users/",
  validators.api_user_validator.create_user,
  controllers.api_user_controller.create
);
router.put("/users/:line_id", controllers.api_user_controller.update);

/* API of controling Reservation */
router.get("/reservations/", controllers.api_reservation_controller.index);
router.get(
  "/reservations/:reservation_id",
  controllers.api_reservation_controller.show
);

module.exports = router;
