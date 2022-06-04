// require dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/users.route");
const cors = require("cors");

// use cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// user route
app.use("/users", userRouter);

// Home Route
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

// Error page
app.use((req, res, next) => {
  res.status(404).json({ message: "route not found" });
});

// server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: "something broke" });
});

module.exports = app;
