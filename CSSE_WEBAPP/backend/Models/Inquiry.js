const mongoose = require("mongoose");

const InquirySchema = mongoose.Schema({
  date: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
  OrderRef: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "PurchaseOrder",
  },
});

module.exports = mongoose.model("Inquiry", InquirySchema);
