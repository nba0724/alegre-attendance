const models = require("../db/models");

/**
 * show all User list
 */
exports.index = (req, res) => {
  models.User.findAll().then(users => {
    res.json({ users: users });
  });
};
