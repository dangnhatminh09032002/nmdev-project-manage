require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// require("./configs/passportConfig");
const passport = require("passport");

const { PORT = 3001 } = process.env;

const app = express();
// Midlleware config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(morgan("tiny"));
app.use(passport.initialize());
app.use(passport.session());
require("./configs/passportConfig");

app.get(
  "/",
  passport.authenticate("google", { scope: ["profile"] }),
  (req, res) => {
    res.redirect("/home");
  }
);
app.get("/home", (req, res) => {
  res.json("Hello World! Welcome to home");
});

app.get(
  "/test",
  passport.authenticate("google", { failureRedirect: "/home" }),
  (req, res) => {
    res.send("Welcome to test page!");
  }
);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
