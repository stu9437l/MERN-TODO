const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbUrl = process.env.ATLAS;
const DbConnection = () => {
  mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("Database connected successfully!");
    })
    .catch((err) => {
      console.log("Database connection error");
    });
};

module.exports = DbConnection;
