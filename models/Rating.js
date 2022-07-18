const mongoose = require('mongoose');
const {Int32} = require('bson');

const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    Song_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SONG",
        required: true
    },
    User_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "USER",
        required: true
    },
    rating: {
        type: Int32,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.models("RATING", ratingSchema);