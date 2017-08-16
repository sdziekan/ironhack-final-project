var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongoose://localhost/ktrip");

var Trip = require("../models/Trip.js");
var Item = require("../models/Item.js");

/* GET home page. */
router.get("/api", function(req, res, next) {
  res.render("index", { title: "K Trip" });
});

router.get("/api/trips", (req, res, next) => {
  Trip.find().then(trips => {
    res.json(trips);
  });
});

router.get("/api/items", (req, res, next) => {
  Item.find().then(items => {
    res.json(items);
  });
});

module.exports = router;
