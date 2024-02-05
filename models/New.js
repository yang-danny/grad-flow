const { model, Schema } = require("mongoose");

const newSchema = new Schema({
  title: { type: String },
  publishDate: { type: String},
  category: { type: String},
  author: { type: String},
  body:{type: String, default: null },
  photo:{type: String, default: null },
});

module.exports = model("New", newSchema);