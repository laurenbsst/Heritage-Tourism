const express = require('express');
const toursRouter = express.Router();
const Tour = require('../models/tour');

toursRouter.get('/', (req, res) => {
    res.render('tours-home');
})