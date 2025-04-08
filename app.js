if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const router = require("./routes");
const cors = require("cors");
const app = express();
const PORT = 3000

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server can be access in http://localhost:${PORT}`);
})
