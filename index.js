const express = require("express");
const app = express();
const path = require("path");

const env = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./src/routes");
const cors = require("cors");

env.config();
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.eo02fim.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  });

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

require("./src/models");
app.use("/api", routes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;
