const mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Location var should have street, city, state, zip, country, etc.
//Comments should be an array or object
const ActivitySchema = new Schema({
  actName: {
    type: String,
    required: [true, "name is required"]
  },
  actType: {
    type: String,
    required: [true, "email is required"],
    enum: ACTIVITIES
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
module.exports = mongoose.model("Activity", ActivitySchema);
