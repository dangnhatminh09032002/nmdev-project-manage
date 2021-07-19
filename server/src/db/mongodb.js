const mongoose = require("mongoose");
const chalk = require("chalk");
const url = process.env.URL_MONGODB;
module.exports = mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: false,
  })
  .then(() => console.log(chalk.green("Database connected!")))
  .catch((err) => console.log(err));
