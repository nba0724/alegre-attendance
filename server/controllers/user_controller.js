const models = require("../db/models");

/**
 * show all User list
 */
exports.index = async (req, res) => {
  const users = await models.User.findAll();
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
