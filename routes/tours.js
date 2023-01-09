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

module.exports = toursRouter;