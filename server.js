const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use('/public', express.static('public'));
app.use('/images', express.static('images'));


app.set('view engine', 'ejs');

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.peakskv.mongodb.net/heritage-app?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true}).then(console.log("Connected to database!"));

const siteRouter = require('./routes/sites');
const galleryRouter = require('./routes/gallery');
const toursRouter = require('./routes/tours');

app.use('/sites', siteRouter);
app.use('/gallery', galleryRouter);
app.use('/tours', toursRouter);

app.get('/', (req, res) => {
    res.render('home');
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});