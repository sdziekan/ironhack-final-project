const mongoose = require("mongoose");
var Schema = mongoose.Schema;

//revise variable types for travelers and viewers should be arrays?
const TripSchema = new Schema({
  tripName: {
    type: String,
    required: [true, "tripName is required"]
  },
  _creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  travelers: {
    type: String,
    required: [true, "email is required"]
  },
  viewers: {
    type: String,
    required: [true, "password is required"]
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  location: {
    type: String
  },
  tripStatus: {
    type: String,
    enum: ["Upcoming", "Dream", "Past"],
    default: "Dream"
  },
  travelerStatus: {
    type: String,
    enum: ["no answer", "going", "not going"]
  }
});
module.exports = mongoose.model("Trip", TripSchema);
