"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("GameRooms", [
      {
        roomName: "Room A",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roomName: "Room B",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roomName: "Room C",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roomName: "Room D",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roomName: "Room E",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GameRooms", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
