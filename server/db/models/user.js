"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      line_id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
      line_name: DataTypes.STRING,
      note: DataTypes.STRING
    },
    {
      underscored: true
    }
  );
  User.associate = models => {
    User.hasMany(models.Reservation, { foreignKey: "line_id" });
  };
  return User;
};
