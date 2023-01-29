const express = require('express');
const toursRouter = express.Router();

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

module.exports = toursRouter;