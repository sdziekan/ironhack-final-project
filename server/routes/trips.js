var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const _ = require("lodash");
mongoose.connect("mongoose://localhost/ktrip");

var Trip = require("../models/Trip.js");
var Item = require("../models/Item.js");

router.get("/", (req, res, next) => {
    Trip.find().then(trips => {
        res.json(trips);
    });
});

router.post("/", (req, res) => {
    var newTrip = new Trip(
        {
            name: req.body.name,
            email: req.body.email
        })

    newTrip.save().then(trip => {

        res.json(trip);
    }).catch(err => {
        console.log("I got this far")
        console.log(err)
    });

});

router.get("/:tripID", (req, res, next) => {
    var tripId = req.params.tripID;
    Trip.findById(tripId, (err, trip) => {
        if (err) next(err);
        else res.json(trip);
    });
});

router.post("/:tripID", (req, res, next) => {
    const tripId = req.params.tripID;

    const object = _.pick(req.body, ['name', 'participants', 'activitiesComments', 'lodgingComments', 'transportationComments', 'currency']);

    const updates = { $set: object };

    Trip.findByIdAndUpdate(tripId, updates, (err, trip) => {
        if (err) { return next(err); }
        return res.json(trip);
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
    Item.find({ trip: tripId }, (err, items) => {
        if (err) next(err);
        else res.json(items);
    });
});

module.exports = router;