const express = require('express');
const galleryRouter = express.Router();
const Site = require('../models/site');

galleryRouter.get('/', (req, res) => {
    res.render('site-gallery');
})

galleryRouter.get('/:site_id', (req, res) => {
    Site.find({site_id: '1'}, function (err, foundSite){
        console.log(foundSite);
        res.render('site-screen', {
            sites: foundSite
        })
    })
});

module.exports = galleryRouter;