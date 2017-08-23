var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const _ = require("lodash");
mongoose.connect("mongoose://localhost/ktrip");

var Trip = require("../models/Trip.js");
var Item = require("../models/Item.js");



router.get("/", (req, res, next) => {
    Item.find().then(items => {
        res.json(items);
    });
});

router.get("/:itemID", (req, res, next) => {
    var itemId = req.params.itemID;
    Item.findById(itemId, (err, item) => {
        if (err) next(err);
        else res.json(item);
    });
});

router.post("/", (req, res) => {
    var newItem = new Item(
        {
            trip: "59946cc1fe21751ab54b4bef",
            name: req.body.name,
            group: req.body.group,
            type: req.body.type,
            startDate: req.body.startDate,
            startTime: req.body.startTime,
            endDate: req.body.endDate,
            endTime: req.body.endTime,
            location: req.body.location,
            cost: req.body.cost,
            url: req.body.url,
            status: req.body.status
        })

    newItem.save().then(item => {

        res.json(item);
    }).catch(err => {
        console.log("I got this far")
        console.log(err)
    });

});

router.post("/:itemID", (req, res, next) => {
    const itemId = req.params.itemID;

    const object = _.pick(req.body, ['name', 'group', 'type', 'startDate', 'startTime', 'endDate', 'endTime', 'location', 'cost', 'url', 'status']);

    const updates = { $set: object };


    Item.findByIdAndUpdate(itemId, updates, (err, item) => {
        if (err) { return next(err); }
        return res.json(item);
    });
});

router.delete("/:itemID", (req, res, next) => {
    const itemId = req.params.itemID;

    Item.findByIdAndRemove(itemId, err => {
        if (err) next(err);
        else res.json({ success: true });
    });
});




module.exports = router;