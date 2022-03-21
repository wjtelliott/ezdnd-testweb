//Config
require('dotenv').config();

//Variables
const express = require('express');
const app = express();
const methodOverride = require('method-override');
// const mongoose = require('mongoose');

// mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
//     () => console.log('Connected using mongo with', process.env.DB_URI));

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Routing
app.use('/heroes', require('./controllers/heroes'));
app.use('/notes', require('./controllers/notes'));
app.use('/locations', require('./controllers/locations'));

// Home & 404
app.get('/', (req, res) => {
    res.status(206).render('home');
});
app.get('*', (req, res) => {
    res.status(404).render('error404');
});

app.listen(process.env.PORT, () => console.log('Server is launching...'));
