const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    locationName: String,
    locationNotes: String
});

module.exports = mongoose.model('locations', noteSchema);