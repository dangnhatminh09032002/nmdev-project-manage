require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const csurf = require("csurf");
require("./db/mongodb");
const setapProxy = require("./setupProxy");

const {
  //static
  PORT = 3001,
  SECRET = "secret",
  NODE_ENV = "development",
  //csurf
  CSRF_KEY = "_csurf", // session name = Set ID
  CSRF_LIFETIME = 1000 * 60 * 60 * 2, // Two hour
} = process.env;

const IN_PROD = NODE_ENV === "production" || false;

const app = express();

//Proxy
setapProxy(app);

// Midlleware config
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
  })
);
app.use(cookieParser());
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

const authRoute = require("./routes/auth");
app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
