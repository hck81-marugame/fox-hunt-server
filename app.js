if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const router = require("./routes");
const cors = require("cors");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://marugame.azriltdkso.fun",
  },
});
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/", router);

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("joinRoom", (data) => {
    socket.join(data.room);
    console.log(`User ${socket.id} joined room ${data.room}`);

    socket.to(data.room).emit("playerJoined", data);
  });

  socket.on("scoreUpdate", (data) => {
    console.log(`Score update from room ${data.room}:`, data);
    socket.to(data.room).emit(`${data.playerNumber}ScoreUpdated`, data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server can be access in http://localhost:${PORT}`);
});
