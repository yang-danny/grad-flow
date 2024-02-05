const { model, Schema } = require("mongoose");

const employerSchema = new Schema({
    name: { type: String,required: true},
    description: { type: String, default: null},
    website:{type: String, default: null},
    phone:{type: String, default: null},
    email: { type: String, unique: true },
    location: { type: String, default: null},
    industry: { type: String, default: null},
    logo: { type: String, default: null}
  });
  
  module.exports = model("Employer", employerSchema);