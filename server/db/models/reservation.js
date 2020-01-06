"use strict";
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    "Reservation",
    {
      is_joined: DataTypes.BOOLEAN,
      line_id: DataTypes.STRING,
      schedule_id: DataTypes.INTEGER
    },
    {
      underscored: true
    }
  );
  Reservation.associate = models => {
    Reservation.belongsTo(models.User, {
      foreignKey: "line_id",
      targetKey: "line_id"
    });
    Reservation.belongsTo(models.Schedule),
      { foreignKey: "schedule_id", targetKey: "schedule_id" };
  };
  return Reservation;
};
