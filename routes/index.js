const express = require("express");
const router = express.Router();
const { productos } = require("../controllers/index");

router.get("/productos", productos);

module.exports = router;
