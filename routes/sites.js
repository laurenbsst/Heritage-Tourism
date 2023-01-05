const express = require('express');
const siteRouter = express.Router();

siteRouter.get('/', (req, res) => {
    res.render('site-screen');
})

module.exports = siteRouter;