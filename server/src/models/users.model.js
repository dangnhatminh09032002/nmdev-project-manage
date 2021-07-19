require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.URL_MONGODB;

const { Schema } = mongoose;

const usersSchema = new Schema({
  id: String,
  displayName: String,
  name: { type: Object },
  picture: String,
  locale: String,
  provider: String,
  email: String,
  email_verified: Boolean,
});

const Users = mongoose.model("User", usersSchema);
module.exports = { Users };
