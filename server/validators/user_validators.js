const { check } = require("express-validator");

module.exports.create_user = [
  check("line_id")
    .not()
    .isEmpty()
    .withMessage("line_id is required")
];
