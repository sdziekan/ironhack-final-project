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

router.get("/api/trips", (req, res, next) => {
  Trip.find().then(trips => {
    res.json(trips);
  });
});

router.get("/api/trips/:tripID", (req, res, next) => {
  var tripId = req.params.tripID;
  Trip.findById(tripId, (err, trip) => {
    if (err) next(err);
    else res.json(trip);
  });
});

router.get("/api/trips/list/:tripID", (req, res, next) => {
  var tripId = req.params.tripID;
  Trip.findById(tripId, (err, trip) => {
    if (err) next(err);
    else res.json(trip);
  });
});

router.get("/api/trips/:tripID/items", (req, res, next) => {
  var tripId = req.params.tripID;
  Item.find(tripId, (err, item) => {
    if (err) next(err);
    else res.json(item);
  });
});

router.get("/api/items", (req, res, next) => {
  Item.find().then(items => {
    res.json(items);
  });
});

//not sure how to handle this
router.get("/api/items/:itemID", (req, res, next) => {
  var itemId = req.params.itemID;
  Item.findById(itemId, (err, item) => {
    if (err) next(err);
    else res.json(item);
  });
});

//not sure that this is correct
router.delete("/api/items/:itemID", (req, res, next) => {
  const itemId = req.params.itemID;

  Item.findByIdAndRemove(itemId, err => {
    if (err) next(err);
    else res.json({ success: true });
  });
});

module.exports = router;
