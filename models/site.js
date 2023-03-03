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
    }
})

module.exports = mongoose.model('Site', siteSchema);