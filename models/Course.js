const { model, Schema } = require("mongoose");

const courseSchema = new Schema({
  title: { type: String },
  photo: { type: String},
  subject: { type: String},
  type: { type: String},
  skills:{type: String, default: null },
  level: { type: String, default: null},
  duration: { type: String,default: null },
  description: { type: String,default: null },
  provider: { type: Schema.Types.ObjectId,
    ref: 'Provider' }
});

module.exports = model("Course", courseSchema);