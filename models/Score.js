const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
    },
    time: {
        type: Number,
        default: 9999.99,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('Score', scoreSchema)