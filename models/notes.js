const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    note: String
});

module.exports = mongoose.model('notes', noteSchema);