const mongoose = require("mongoose");
var Schema = mongoose.Schema;

//type variable might need some work
const ItemSchema = new Schema({
  trip: {
    type: Schema.Types.ObjectId,
    ref: "Trip",
    required: true
  },
  name: {
    type: String,
    required: [true, "name is required"]
  },
  group: {
    type: String,
    required: [true, "group is required"],
    enum: ["Activities", "Lodging", "Transportation"]
  },
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
      "other",
      "Food",
      "Drinks",
      "Hotel"
    ]
  },
  startTime: {
    type: Date
  },
  endTime: {
    type: Date
  },
  location: {
    type: String
  },
  cost: {
    type: Number
  },
  upVotes: {
    type: Number,
    default: 0
  },
  downVotes: {
    type: Number,
    default: 0
  },
  url: {
    type: String
  },
  status: {
    type: String,
    enum: ["potential", "booked", "archived"],
    default: "potential"
  }
});

module.exports = mongoose.model("Item", ItemSchema);
