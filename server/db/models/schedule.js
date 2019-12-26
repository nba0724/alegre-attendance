"use strict";
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define(
    "Schedule",
    {
      subject: { type: DataTypes.STRING, allowNull: false },
      content: DataTypes.TEXT,
      place: DataTypes.STRING,
      start_date: { type: DataTypes.DATE, allowNull: false },
      end_date: { type: DataTypes.DATE, allowNull: false },
      capacity: { type: DataTypes.INTEGER, allowNull: false },
      release_flag: { type: DataTypes.BOOLEAN, defaultValue: true }
    },
    {
      underscored: true
    }
  );
  Schedule.associate = function(models) {
    // associations can be defined here
  };
  return Schedule;
};
