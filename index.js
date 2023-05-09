const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const tienda = require("./routes/index");
const usuarios = require("./routes/users");

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json(""));
app.use(cookieParser());
app.use(cors());

app.use("/api", tienda);
app.use("/auth", usuarios);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
