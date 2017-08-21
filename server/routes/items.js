var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
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
            startTime: req.body.startTime,
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




module.exports = router;