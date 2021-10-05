const mongoose = require("mongoose");

const ProcStaff = mongoose.Schema({
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
  approvedOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "PurchaseOrder",
    },
  ],
});

const User = mongoose.model("ProcumentStaff", ProcStaff);
module.exports = User;
