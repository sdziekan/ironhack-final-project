var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ktrip");

var Trip = require("../models/Trip.js");
var Item = require("../models/Item.js");

var allTrips = require("../../data/trips.json");
var allItems = require("../../data/items.json");

Trip.insertMany(allTrips, (error, docs) => {
  if (error) console.log(error);
  else console.log("Success, " + docs.length + " docs inserted");
});

Item.insertMany(allItems, (error, docs) => {
  if (error) console.log(error);
  else console.log("Success, " + docs.length + " docs inserted");
});
