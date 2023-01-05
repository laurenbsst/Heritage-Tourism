const express = require('express');
const galleryRouter = express.Router();
const Site = require('../models/site');

galleryRouter.get('/:site_id', (req, res) => {
    res.render('site-gallery');
})

module.exports = galleryRouter;