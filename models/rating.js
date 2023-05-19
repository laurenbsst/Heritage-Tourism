const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    tourType: {
        type: String
    },
    enjoyment: {
        type: String
    },
    interactive: {
        type: String
    },
    directions: {
        type: String
    },
    additional_feedback: {
        type: String
    },
})

module.exports = mongoose.model('Rating', ratingSchema);