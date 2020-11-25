const mongoose = require("mongoose");


const urlSchema = mongoose.Schema({
  longURL: { type: String, required: true },
  customUrl: {
    type: String,
    index: {
      unique: true,
      partialFilterExpression: { customUrl: { $type: "string" } }
    },
    default: null
  }
});

module.exports = mongoose.model("URl", urlSchema);