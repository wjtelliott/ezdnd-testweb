const mongoose = require('mongoose');
const { Schema } = mongoose;

const heroSchema = new Schema({
    playerName: { type: String, description: 'Who is playing as this character?' },
    heroName: { type: String, description: 'What is the name of this character?' },
    level: { type: Array, description: 'What level is the character?' },
    class: { type: Array, description: 'What is this character\'s class?' },
    strength: { type: Number, description: 'Strength - How strong is this person?' },
    dexterity: { type: Number, description: 'Dexterity - How nimble is this person?' },
    constitution: { type: Number, description: 'Constitution - How is this person\'s fortitude?' },
    intelligence: { type: Number, description: 'Intelligence - How smart is this person?' },
    wisdom: { type: Number, description: 'Wisdom - How wise is this person?' },
    charisma: { type: Number, description: 'Charisma - How charismatic is this person?' },
    lifeCurrent: Number,
    lifeMax: { type: Number, description: 'What is the player\'s maximum life total?' },
    lifeTemp: { type: Number, description: 'Current temporary life points' },
    race: { type: String, description: 'What race is this person?' },
    image: String,
    proficiencies: Array,
});

module.exports = mongoose.model('hero', heroSchema);

