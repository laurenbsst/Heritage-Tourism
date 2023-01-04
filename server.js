const express = require('express');
const app = express();

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})
app.get('/site-gallery', (req, res) => {
    res.render('site-gallery');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});