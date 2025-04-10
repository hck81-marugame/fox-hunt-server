const { GameRoom } = require("../models");
const errorHandler = require("../middleware/errorHandler");

class ControllerGameRoom {
  static async getRoomById(req, res, next) {
    try {
      let { id } = req.params;
      let room = await GameRoom.findByPk(id);
      if (!room) {
        throw { name: "NotFound", message: `Room id ${id} not found` };
      }
      res.json(room);
    } catch (error) {
      next(error);
    }
  }

  static async allGameRoom(req, res, next) {
    try {
      const rooms = await GameRoom.findAll();
      res.json(rooms);
    } catch (error) {
      next(error);
    }
  }

  static async updateRoomById(req, res, next) {
    try {
      let { id } = req.params;
      let { name } = req.body;
      let room = await GameRoom.findByPk(id);
      if (!room) {
        throw { name: "NotFound", message: `Room id ${id} not found` };
      }
      // 1 minute and 30 seconds
      if (room.updatedAt < new Date(Date.now() - 60 * 1000)) {
        await room.update({ player1: null, player2: null, isFull: false });
      } else if (room.isFull) {
        throw { name: "BadRequest", message: `Room id ${id} is full` };
      }
      if (!room.player1) {
        await room.update({ player1: name });
      } else if (!room.player2) {
        await room.update({ player2: name });
      }
      if (room.player1 && room.player2) {
        await room.update({ isFull: true });
      }
      res.json(room);
    } catch (error) {
      next(error);
    }
  }

  static async resetRoomById(req, res, next) {
    try {
      let { id } = req.params;
      let room = await GameRoom.findByPk(id);
      if (!room) {
        throw { name: "NotFound", message: `Room id ${id} not found` };
      }
      await room.update({ player1: null, player2: null, isFull: false });
      res.json(room);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerGameRoom;
