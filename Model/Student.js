const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  grade: {
    type: Schema.Types.ObjectId,
    ref:"Grade"
  },
  city: {
    type: Schema.Types.ObjectId,
    ref:"City"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
