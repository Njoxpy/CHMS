const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },

}, {timestamps: true})

module.exports = mongoose.model('member', memberSchema)

