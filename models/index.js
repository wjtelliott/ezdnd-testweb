const req = require('express/lib/request');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Connection to MongoDB failed!'))

module.exports.Heroes = require('./heroes');
module.exports.Notes = require('./notes');
module.exports.Locations = require('./locations');
module.exports.Users = require('./users');