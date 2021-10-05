const mongoose = require("mongoose");

const SupplierSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ItemSchema",
    },
  ],
});

const User = mongoose.model("Supplier", SupplierSchema);
module.exports = User;
