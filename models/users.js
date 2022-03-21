const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('users', noteSchema);