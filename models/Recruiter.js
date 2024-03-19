const { model, Schema } = require("mongoose");

const recruiterSchema = new Schema({
    name: { type: String,required: true},
    logo: { type: String, default: null},
    service: {type:[String], default:null},
    location: { type: String, default: null},
    website:{type: String, default: null},
    phone:{type: String, default: null},
    email: { type: String, unique: true },
    
  });
  
  module.exports = model("Recruiter", recruiterSchema);