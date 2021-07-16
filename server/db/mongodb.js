const mongoose = require("mongoose");

const url = process.env.URL_MONGODB;
module.exports = mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: false,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
