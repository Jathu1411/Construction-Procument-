const mongoose = require("mongoose");

const CreditNoteSchema = mongoose.Schema({
  returnID: {
    type: mongoose.Types.ObjectId,
    required: false,
    ref: "Return",
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  invoiceID: {
    type: mongoose.Types.ObjectId,
    required: false,
    ref: "Invoice",
  },
});

module.exports = mongoose.model("Creditnote", CreditNoteSchema);
