require("dotenv").config();
const chalk = require("chalk");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const csurf = require("csurf");
const session = require("express-session");
const path = require("path");
require("./db/mongodb");

//import Route
const authRouter = require("./routes/auth");
const apiRouter = require("./routes/api");
const profileRouter = require("./routes/profile");

// Import ENV
const {
  HTTP_ONLY = false,
  PORT = 4000,
  SES_NAME = "sid",
  SES_SECRET = "secret",
  SECRET = "secret",
  NODE_ENV = "development",
  CSRF_KEY = "_csurf", // session name = Set ID
  CSRF_LIFETIME = 1000 * 60 * 60 * 2, // Two hour
  SES_LIFETIME = 1000 * 60 * 60 * 2,
} = process.env;

const IN_PROD = NODE_ENV === "production" || false;

const app = express();

// Midlleware config
if (NODE_ENV === "development") app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  session({
    name: SES_NAME,
    secret: SES_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: HTTP_ONLY,
      maxAge: SES_LIFETIME,
      secure: IN_PROD,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  csurf({
    cookie: {
      key: CSRF_KEY,
      httpOnly: false,
      maxAge: CSRF_LIFETIME,
      secure: IN_PROD,
    },
  })
);

// Set global var
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  // res.locals.authenticated = !req.user.anonymous || null;
  next();
});

// Static folder
app.use(express.static(path.join(__dirname, "public")));

const { ensureAuth } = require("./middlewares/authMiddleware");
app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.get("/login", (req, res, next) => {
  console.log("--GET /login: ", JSON.stringify(res.locals));
  res.send(req.user);
});
// app.route("/user").get((req, res, next) => {
//   console.log("GET /login: ", req.cookies);
//   res.send("welcome to page user: ");
// });
// error 204
// app.use(middlewares.notFound);

app.listen(PORT, () => {
  console.log(chalk.red("Listening on port " + PORT));
});
