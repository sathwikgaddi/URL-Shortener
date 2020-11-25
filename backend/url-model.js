const mongoose = require("mongoose");


const urlSchema = mongoose.Schema({
    longURL: {type: String, required: true},
    customString: {type: String}
});

module.exports = mongoose.model("URl", urlSchema);