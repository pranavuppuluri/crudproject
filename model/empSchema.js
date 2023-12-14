const mongoose = require("mongoose");
const empSchema = new mongoose.Schema(
  {
    "name": { type: String },
    "email": { type: String },
    "empID": { type: Number }
  },
  {
    collection: "employee",
  }
);

module.exports = mongoose.model("empSchema", empSchema);
