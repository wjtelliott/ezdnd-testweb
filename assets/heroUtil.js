const db = require('../models');

const createNewHero = (bodyInfo) => {

    if (typeof bodyInfo.level !== Array) bodyInfo.level = [].concat(bodyInfo.level) || [0];
    if (typeof bodyInfo.class !== Array) bodyInfo.class = [].concat(bodyInfo.class) || ['Barbarian'];
    if (typeof bodyInfo.proficiencies !== Array) bodyInfo.proficiencies = [];

    db.Heroes.create(
        {
            playerName: bodyInfo.playerName || 'Anon',
            heroName: bodyInfo.heroName || 'Unnamed',
            level: bodyInfo.level || [0],
            class: bodyInfo.class || ['Barbarian'],
            strength: bodyInfo.strength || 10,
            dexterity: bodyInfo.dexterity || 10,
            constitution: bodyInfo.constitution || 10,
            intelligence: bodyInfo.intelligence || 10,
            wisdom: bodyInfo.wisdom || 10,
            charisma: bodyInfo.charisma || 10,
            'lifeCurrent': bodyInfo.lifeMax || 6,
            lifeMax: bodyInfo.lifeMax || 6,
            lifeTemp: bodyInfo.lifeTemp || 0,
            race: bodyInfo.race || 'Human',
            image: bodyInfo.image || '/images/portraits/portrait1.JPG',
            proficiencies: bodyInfo.proficiencies || []
        },
    );
};


const deleteHero = index => {
    db.Heroes.findByIdAndDelete(index)
        .then()
        .catch(err => console.log(err));
}

module.exports = {createNewHero, deleteHero};