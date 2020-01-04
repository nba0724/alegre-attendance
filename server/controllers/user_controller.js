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
 * show all User list
 */
// exports.create = (req, res) => {};

/**
 * show all User list
 */
exports.index = (req, res) => {
  models.User.findAll().then(users => {
    res.json({ users: users });
  });
};
