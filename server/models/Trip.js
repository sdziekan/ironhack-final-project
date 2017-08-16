const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const TripSchema = new Schema({
  name: {
    type: String,
    required: [true, "type is required"]
  },
  email: {
    type: String,
    required: [true, "email is required"]
  },
  participants: [
    {
      type: String
    }
  ],
  activitiesComments: {
    type: String
  },
  lodgingComments: {
    type: String
  },
  transportationComments: {
    type: String
  },
  currency: {
    type: String
  }
});
module.exports = mongoose.model("Trip", TripSchema);
