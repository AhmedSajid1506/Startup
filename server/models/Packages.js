const mongoose = require("mongoose");

const { Schema } = mongoose;

const PackagesSchema = new Schema({
  ctg: {
    silver: {
      String,
    },
    gold: {
      String,
    },
    diamond: {
      String,
    },
  }
});

module.exports = mongoose.model("packages", PackagesSchema);
