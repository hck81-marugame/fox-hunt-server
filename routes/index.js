const express = require("express");
const router = express.Router();
const ControllerGameRoom = require("../controllers/roomController");
const errorHandler = require("../middleware/errorHandler");

// Game Room Routes
router.get("/game-rooms", ControllerGameRoom.allGameRoom);
router.get("/game-rooms/:id", ControllerGameRoom.getRoomById);
router.put("/game-rooms/:id", ControllerGameRoom.updateRoomById);
router.put("/game-rooms/:id/reset", ControllerGameRoom.resetRoomById);

router.use(errorHandler);

module.exports = router;
