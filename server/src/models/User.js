require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.URL_MONGODB;

const { Schema } = mongoose;

const userSchema = new Schema({
  id: String,
  displayName: String,
  name: { type: Object },
  picture: String,
  locale: String,
  provider: String,
  email: String,
  email_verified: Boolean,
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
