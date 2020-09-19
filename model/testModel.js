const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  role: String,
  number: String,
  status: {
    type: String,
    default: "active",
  },
});

const Test = mongoose.model("test", testSchema);
module.exports = Test;
