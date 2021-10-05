const mongoose = require("mongoose");

const ManagerSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("Manager", ManagerSchema);
module.exports = User;
