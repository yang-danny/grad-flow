const { model, Schema } = require("mongoose");

const providerSchema = new Schema({
    name: { type: String,required: true},
    logo: { type: String, default: null}
  });
  
  module.exports = model("Provider", providerSchema);