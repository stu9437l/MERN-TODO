const express = require("express");
const app = express();
const dotenv = require("dotenv");
const ErrorHandling = require("./middleware/error-handling");
const DbConnection = require("./config/db");
const router = require("./route");
const cors = require("cors");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors
app.use(cors());


// db connection
DbConnection();

// middleware for error handling
app.use("/api", router);

app.use(ErrorHandling);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
});
