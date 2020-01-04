const { validationResult } = require("express-validator");
const models = require("../db/models");

/**
 * show all User list
 */
exports.indexs = async (req, res) => {
  const users = await models.User.findAll({
    raw: true,
    include: [
      {
        model: models.Reservation,
        required: true
      }
    ]
  });

  res.json({ users: users });
};

/**
 * show User
 */
exports.show = async (req, res) => {
  const user = await models.User.findByPk(req.params.line_id);
  res.json({ user: user });
};

/**
 * index User - Reservation
 */
exports.userReservation = async (req, res) => {
  const users = await models.User.findAll({
    raw: true,
    include: [
      {
        model: models.Reservation,
        required: true
      }
    ]
  });

  res.json({ users: users });
};

/**
 * create User data
 */
exports.create = (req, res) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    console.log("error");
  }
  res.json({ test: "test" });
};

/**
 * show all User list
 */
exports.update = (req, res) => {
  models.User.findAll().then(users => {
    res.json({ users: users });
  });
};
