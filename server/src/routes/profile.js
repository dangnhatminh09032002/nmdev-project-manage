const express = require("express");
const profileRouter = express.Router();

profileRouter.get("/", (req, res) => {
  res.status(204).send("Welcome to profile");
});

module.exports = profileRouter;
