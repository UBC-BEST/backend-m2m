const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String},
    email: { type: String},
    msScore : { type: Number, required: false},
    selfAssesmentScore: { type : Number, required: false},
    miscInfo: {},
    goal: { type: String, required: true},
    games: []
});

module.exports = mongoose.model("User", UserSchema);