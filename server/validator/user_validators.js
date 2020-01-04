const { check } = require("express-validator");

module.exports = [
  check("line_id")
    .not()
    .isEmpty()
    .withMessage("line_id is required")
];
