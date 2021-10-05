const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({
  paidDate: {
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
    default: "paid",
  },
  dueDate: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  InvoiceRef: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "Invoice",
  },
  orderRef: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "PurchaseOrder",
  },
});

module.exports = mongoose.model("Payment", PaymentSchema);
