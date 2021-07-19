const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("../configs/passportConfig");
const chalk = require("chalk");

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {});

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/google/success",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "/user/login",
  }),
  (req, res) => {
    res.redirect("/user/login");
  }
);

module.exports = authRouter;
