const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Creating connection to the database
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DB_PASSWORD);
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connected successfully.");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

// Routes
const booksRoute = require("./routes/booksRoute");
app.use("/books", booksRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
