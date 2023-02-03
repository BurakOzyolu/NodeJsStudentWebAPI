const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  students:[{
    type:Schema.Types.ObjectId,
    ref : "Student"
  }]
});

module.exports = mongoose.model("City", CitySchema);