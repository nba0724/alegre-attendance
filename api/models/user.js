"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      line_id: DataTypes.STRING,
      line_name: DataTypes.STRING,
      note: DataTypes.STRING
    },
    {
      underscored: true
    }
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
