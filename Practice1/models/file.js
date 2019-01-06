const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let file = new File(
  {},
  {
    collection: "file"
  }
);

module.exports = mongoose.model("file", file);
