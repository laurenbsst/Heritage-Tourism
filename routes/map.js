const express = require('express');
const mapRouter = express();

mapRouter.get('/', (req, res) => {
    res.render('map');
});

module.exports = mapRouter;