var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongoose://localhost/ktrip");

var Trip = require("../models/Trip.js");
var Item = require("../models/Item.js");

/* GET home page. */
router.get("/api", function (req, res, next) {
  res.render("index", { title: "K Trip" });
});

module.exports = router;
