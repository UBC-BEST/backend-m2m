const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    name: { type: String, required: true},
    gameData: {
        level: {type: Number},
        score: {type: Number},
    },
});

module.exports = mongoose.model("Game", GameSchema);