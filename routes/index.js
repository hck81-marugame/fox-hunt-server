const express = require("express");
const router = express.Router();
const ControllerGameRoom = require("../controllers/roomController");
const errorHandler = require("../middleware/errorHandler");
const GeminiController = require("../controllers/geminiController");

// Game Room Routes
router.get("/game-rooms", ControllerGameRoom.allGameRoom);
router.get("/game-rooms/:id", ControllerGameRoom.getRoomById);
router.put("/game-rooms/:id", ControllerGameRoom.updateRoomById);
router.put("/game-rooms/:id/reset", ControllerGameRoom.resetRoomById);
// Gemini Routes
router.get("/generate-name", GeminiController.generateName);

router.use(errorHandler);

module.exports = router;
