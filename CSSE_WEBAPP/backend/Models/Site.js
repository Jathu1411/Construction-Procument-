const mongoose = require("mongoose");

const SiteSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("SiteSchema", SiteSchema);
