"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("MusicianInstruments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      musician_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Musicians" },
      },
      instrument_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Instruments" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("MusicianInstruments");
  },
};
