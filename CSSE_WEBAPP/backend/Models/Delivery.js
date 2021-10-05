const mongoose = require("mongoose");

const DeliverySchema = mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    required: true,
    default: "On process",
  },

  isFullDelivery: {
    type: Boolean,
    required: true,
    default: false,
  },

  orderRef: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "PurchaseOrder",
  },
});

module.exports = mongoose.model("Delivery", DeliverySchema);
