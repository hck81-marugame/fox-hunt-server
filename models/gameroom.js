"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GameRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GameRoom.init(
    {
      roomName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      player1: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      player2: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      isFull: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "GameRoom",
    }
  );
  return GameRoom;
};
