const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routes
const postRouter = require("./routes/Questions");
app.use("/question", postRouter);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log("server running...");
    });
  })
  .catch((err) => {
    console.log("sorry bro ");
    console.log("Error connecting to server due to: " + err.message);
  });
