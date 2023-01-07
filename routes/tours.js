const express = require('express');
const toursRouter = express.Router();

toursRouter.get('/', (req, res) => {
    res.render('tours-home');
});

module.exports = toursRouter;