const mongoose = require("mongoose");

const Receipt = mongoose.Schema({
  deliveryID: {
    type: mongoose.Types.ObjectId,
    required: false,
    ref: "Delivery",
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  items: {
    type: mongoose.Types.ObjectId,
    required: false,
    ref: "PurchaseOrder",
  },
});

module.exports = mongoose.model("ReceiptScema", Receipt);
