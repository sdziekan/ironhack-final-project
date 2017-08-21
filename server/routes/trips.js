var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongoose://localhost/ktrip");

var Trip = require("../models/Trip.js");
var Item = require("../models/Item.js");

router.get("/", (req, res, next) => {
    Trip.find().then(trips => {
        res.json(trips);
    });
});

router.get("/:tripID", (req, res, next) => {
    var tripId = req.params.tripID;
    Trip.findById(tripId, (err, trip) => {
        if (err) next(err);
        else res.json(trip);
    });
});

router.get("/list/:tripID", (req, res, next) => {
    var tripId = req.params.tripID;
    Trip.findById(tripId, (err, trip) => {
        if (err) next(err);
        else res.json(trip);
    });
});

router.get("/:tripID/items", (req, res, next) => {
    var tripId = req.params.tripID;
    Item.find(tripId, (err, item) => {
        if (err) next(err);
        else res.json(item);
    });
});

module.exports = router;