const mongoose = require("mongoose");

const PurOrder = mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  expectedDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },

  Supplier: {
    type: String,
    required: true,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "ItemSchema",
    },
  ],
});

module.exports = mongoose.model("PurchaseOrder", PurOrder);
