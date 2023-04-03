const mongoose = require('mongoose');
var Int32 = require('mongoose-int32');

const siteSchema = new mongoose.Schema({
    siteName: {
        type: String
    },
    siteInfo1: {
        type: String
    },
    siteInfo2: {
        type: String
    },
    siteInfo3: {
        type: String
    },
    tours: {
        type: String
    },
    site_id: {
        type: String
    },
    monday: {
        type: String
    },
    tuesday: {
        type: String
    },
    wednesday: {
        type: String
    },
    thursday: {
        type: String
    },
    friday: {
        type: String
    },
    saturday: {
        type: String
    },
    sunday: {
        type: String
    },
})

module.exports = mongoose.model('Site', siteSchema);