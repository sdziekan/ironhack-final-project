const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

// Possibly remove variables gender, dob, location, interests
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"]
  },
  gender: {
    type: String,
    enum: ["Female", "Male", "Other"]
  },
  dob: {
    type: Date
  },
  location: {
    type: String
  },
  interests: {
    type: String
  },
  tripId: {
    type: Schema.Types.ObjectId,
    ref: "Trip"
  },
  image: String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
