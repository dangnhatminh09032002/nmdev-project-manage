const express = require("express");
const chalk = require("chalk");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");

userRouter.get("/", (req, res, next) => {
  console.log(chalk.red("Welcome"));
  res.send("Hello");
});

userRouter.get("/login", async (req, res, next) => {
  res.send("Hello");
});

module.exports = userRouter;
