const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
   task: {
      type: String,
      required: true,
   },
   completed: {
      type: Boolean,
      deafult: false,
   },
});

module.exports = mongoose.model("task", taskSchema);
