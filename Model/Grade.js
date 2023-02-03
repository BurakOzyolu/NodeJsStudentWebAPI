const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GradeSchema = new mongoose.Schema({
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


module.exports = mongoose.model("Grade", GradeSchema);