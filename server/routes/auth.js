const express = require("express");
const passport = require("passport");
require("../configs/passportConfig");

const authRoute = express.Router();

authRoute.get("/login", (req, res) => {});

authRoute.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRoute.get(
  "/google/success",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = authRoute;
