const express = require("express");
const passport = require("passport");
require("../configs/passportConfig");
const chalk = require("chalk");

const authRouter = express.Router();

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/google/success",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.locals.user = req.user;
    res.redirect("/login");
  }
);

module.exports = authRouter;
