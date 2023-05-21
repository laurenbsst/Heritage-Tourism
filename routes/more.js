const express = require('express');
const moreRouter = express.Router();

moreRouter.get('/', (req, res) => {
    res.render('more');
});

module.exports = moreRouter;