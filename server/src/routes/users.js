const express = require("express");
const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.status(204).send("Welcome to users");
});

module.exports = usersRouter;
