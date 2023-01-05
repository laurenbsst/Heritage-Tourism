const mongoose = require('mongoose');
var Int32 = require('mongoose-int32');

const siteSchema = new mongoose.Schema({
    siteName: {
        type: String
    },
    siteInfo: {
        type: String
    },
    tours: {
        type: String
    },
    site_id: {
        type: String
    }
})

module.exports = mongoose.model('Site', siteSchema);