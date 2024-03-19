const { model, Schema } = require("mongoose");

const jobSchema = new Schema({
  title: { type: String },
  type: { type: String},
  category: { type: String},
  location: { type: String},
  salary:{type: String, default: null },
  eligibility:{type: String, default: null },
  level: { type: String, default: null},
  shift:{type: String, default: null },
  createdDate:{type: String},
  closeDate:{type: String},
  description: { type: String },
  employer: { type: Schema.Types.ObjectId,
    ref: 'Employer' },
    recruiter: { type: Schema.Types.ObjectId,
      ref: 'Recruiter' },
});

module.exports = model("Job", jobSchema);