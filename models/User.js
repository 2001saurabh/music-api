const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    Name: {
        type: String,
    },
    Email: {
        type: String,
        required: [true, 'Please Enter Emai!'],
        unique: [true, 'Alreday Registered!'],
        match: [/\S+@\S+\.\S+/, 'is invalid!']
    },

}, { timestamps: true })

module.exports = mongoose.model("USER", userSchema);