const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    userName: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Review', ReviewSchema)