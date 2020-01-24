// const { validationResult } = require("express-validator");
const models = require("../db/models");

/**
 * show all Reservation list
 */
exports.index = async (req, res) => {
  const reservations = await models.User.findAll();

  res.json({ reservations: reservations });
};

/**
 * show Rservataion
 */
exports.show = async (req, res) => {
  const reservation = await models.User.findByPk(req.params.reservation_id);
  res.json({ reservation: reservation });
};
