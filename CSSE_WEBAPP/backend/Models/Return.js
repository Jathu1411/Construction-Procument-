const mongoose = require("mongoose");

const ReturnSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "PurchaseOrder",
    },
  ],
});

const User = mongoose.model("Return", ReturnSchema);
module.exports = User;
