const mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Location var should have street, city, state, zip, country, etc.
//Comments should be an array or object
const LodgingSchema = new Schema({
  type: {
    type: String,
    required: [true, "type is required"],
    enum: ["AirBnB", "hotel", "couchsurf", "friends", "campsite", "other"]
  },
  name: {
    type: String,
    required: [true, "name is required"]
  },
  startDate: {
    type: Date
  },
  endTime: {
    type: Time
  },
  location: {
    type: String
  },
  cost: {
    type: Number
  },
  booked: {
    type: String,
    enum: ["not booked", "booked"],
    default: "not booked"
  },
  upVotes: {
    type: Number
  },
  downVotes: {
    type: Number
  },
  url: {
    type: String
  },
  commentsPublic: {
    type: String
  },
  commentsPrivate: {
    type: String
  },
  reservationNumber: {
    type: String
  },
  status: {
    type: String,
    enum: ["potential", "confirmed", "archived"],
    default: "potential"
  }
});

module.exports = mongoose.model("Lodging", LodgingSchema);
