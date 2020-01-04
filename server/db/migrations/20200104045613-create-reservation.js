"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("reservations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      join_flag: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      line_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      schedule_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable("reservations");
  }
};
