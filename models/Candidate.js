const { model, Schema } = require("mongoose");

const candidateSchema = new Schema({
    firstname:{type: String, required: true},
    lastname:{type: String, required: true},
    avatar:{type: String, default: null},
    address:{type: String, default: null},
    city:{type: String, required: true},
    country:{type: String, required: true},
    role:{type: String, default: null},
    email: { type: String, unique: true },
    phone:{type: String, default: null},
    school:{type: String, default: null},
    degree:{type: String, default: null},
    employers: [{ type: Schema.Types.ObjectId,
        ref: 'Employer' }],
})
module.exports = model("Candidate", candidateSchema);