const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const atlas_uri = process.env.ATLAS_URI;
mongoose.connect(atlas_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb Connection successful");
});

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

const userRouter = require("./Routers/userRouter");
const exerciseRouter = require("./Routers/exerciseRouter");

app.use("/users", userRouter);
app.use("/exercise", exerciseRouter);

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});
