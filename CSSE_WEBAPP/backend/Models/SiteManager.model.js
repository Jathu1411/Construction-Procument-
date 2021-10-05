const mongoose = require("mongoose");

const SiteManagerSchema = mongoose.Schema({
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
  requisition: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "Requisitions",
  },
});

const SM = mongoose.model("SiteManager", SiteManagerSchema);
module.exports = SM;
