const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json(""));
app.use(cookieParser());
app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
