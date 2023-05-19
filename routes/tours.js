const express = require('express');
const toursRouter = express.Router();
const Rating = require('../models/rating');
const alert = require('alert');

toursRouter.get('/', (req, res) => {
    res.render('tours-home');
});

toursRouter.get('/churches', (req, res) => {
    res.render('churches');
})

toursRouter.get('/public-buildings', (req, res) => {
    res.render('public-buildings');
})

toursRouter.get('/churches/rating', (req, res) => {
    res.render('tour-rating');
})

toursRouter.get('/public-buildings/rating', (req, res) => {
    res.render('tour-rating');
})
toursRouter.post('/', (req, res) => {
    const rating = new Rating({tourType: req.body.tour, enjoyment: req.body.enjoyment, interactive: req.body.interactive, directions: req.body.direction, additional_feedback: req.body.additional_feedback});
    rating.save(function(err) {
        if (err) return handleError(err);
    });
    alert('Rating submitted. Thank you for your input!');
    res.redirect('/');
})

module.exports = toursRouter;