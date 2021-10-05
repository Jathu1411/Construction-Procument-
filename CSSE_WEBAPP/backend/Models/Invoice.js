const mongoose = require("mongoose");

const InvoiceSchema = mongoose.Schema({
  date: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  OrderRef: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "PurchaseOrder",
    },
  ],
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
