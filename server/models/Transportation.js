const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const TransportationSchema = new Schema({
  type: {
    type: String,
    required: [true, "type is required"],
    enum: [
      "Car - own",
      "Car - rental",
      "Car - share",
      "Plane",
      "Train",
      "Boat/Ferry",
      "Hiking/Walking",
      "other"
    ]
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

module.exports = mongoose.model("Transportation", TransportationSchema);
