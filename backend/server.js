const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
