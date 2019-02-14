var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const AlienSchema = new Schema({
  // `title` is required and of type String
  alienName: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  image: {
    type: String,
    required: true
  }
//    count:{
//     type: Number,
//     default: 0,
//     required: true
//    }

});

const Alien = mongoose.model("Alien", AlienSchema);


// Export the Article model
module.exports = Alien;