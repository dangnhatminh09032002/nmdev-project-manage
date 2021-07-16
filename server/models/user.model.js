require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.URL_MONGODB;

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  displayName: String,
  name: { type: Object },
  picture: String,
  locale: String,
  provider: String,
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
