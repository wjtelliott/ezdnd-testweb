const React = require('react');
const Default = require('../default');

const heroDetailsPage = ({data}) => {

    
    // playerName: { type: String, description: 'Who is playing as this character?' },
    // level: { type: Array, description: 'What level is the character?' },
    // class: { type: Array, description: 'What is this character\'s class?' },
    // race: { type: String, description: 'What race is this person?' },
    // image: String,


    // <div id={`HERO${el.id}`} className='card m-5 d-inline-block align-middle' style={{width: '18rem', height: 'auto', cursor: 'pointer'}}>
    //             <img className='card-img-top' src={getClassPicture(el.class?.[0])} alt='Portrait1'/>
    //             <div className='card-body'>
    //                 <h5 className='card-title'>{el.heroName}</h5>
    //                 <p className='card-text'>{`A Lv${el.level?.reduce((e, i) => e + i) ?? 'Unknown'} ${el.class?.length > 1 ? 'multiclassed' : el.class[0]} hero played by ${el.playerName}`}</p>
    //             </div>
    //         </div>


    const { strength, dexterity, constitution, intelligence, wisdom, charisma } = data;
    const heroStats = { strength, dexterity, constitution, intelligence, wisdom, charisma };


    const getClassPicture = hClass => {
        switch (hClass) {
            case 'Barbarian': return '/images/portraits/portrait1.JPG'
            default: return '/images/portraits/portrait2.JPG'
        }
    }

    const getProficiencyBonusTrue = () => {
        return Math.min(10, Math.max(1 + Math.ceil(data.level?.reduce((e, i) => e + i) / 4), 2));
    }

    const getStatMod = (stat, asInt = false) => {
        const mod = Math.min(10, Math.max(-5, Math.floor((stat - 10) / 2)))
        return asInt ? mod : mod > 0 ? `+${mod}` : mod
    }

    const getHeroProficiencies = () => {


        data.proficiencies = ['athletics', 'deception', 'nature', 'medicine', 'stealth'];

        const getSkillType = skill => {
            switch (skill) {
                default: return null;
                case 'athletics': return 'strength';
                case 'deception':
                case 'intimidation':
                case 'performance':
                case 'persuasion': return 'charisma';
                case 'nature':
                case 'investigation':
                case 'history':
                case 'arcana':
                case 'religion': return 'intelligence';
                case 'sleight Of Hand':
                case 'acrobatics':
                case 'stealth': return 'dexterity';
                case 'perception':
                case 'medicine':
                case 'insight':
                case 'animal Handling':
                case 'survival': return 'wisdom';
            }
        }

        const formatSkillTitle = (el, content) => {
            return (
                <div className='card bg-inside createNewCard m-1 d-inline-block align-middle'>
                    <div className='card-body'>
                        <p className='card-title font-size-3 text-nowrap'>{el[0].toUpperCase().concat(el.slice(1))}:</p>
                        {content}
                    </div>
                </div>
            )
        }
        const formatSkill = el => {

            let name = el[0].toUpperCase().concat(el.slice(1));
            let value = Number(getStatMod(heroStats[getSkillType(el)], true)) + Number(data.proficiencies.indexOf(el) === -1 ? 0 : getProficiencyBonusTrue());

            return (<span className={`${data.proficiencies.indexOf(el) === -1 ? '' : 'text-primary'} mx-1 px-1 font-size-2 text-nowrap`}>{name}: {`${(value >= 0 ? '+' : '').concat(value)}`}</span>)
        }

        let formatted = [];

        formatted.push(formatSkillTitle('charisma Skills',
        [
            'deception',
            'intimidation',
            'performance',
            'persuasion',
        ].map ( el => formatSkill(el))));

        formatted.push(formatSkillTitle('intelligence Skills',
        [
            'nature',
            'investigation',
            'history',
            'arcana',
            'religion',
        ].map ( el => formatSkill(el))));

        formatted.push(formatSkillTitle('dexterity Skills',
        [
            'sleight Of Hand',
            'acrobatics',
            'stealth',
        ].map ( el => formatSkill(el))));

        formatted.push(formatSkillTitle('wisdom Skills',
        [
            'perception',
            'medicine',
            'insight',
            'animal Handling',
            'survival'
        ].map ( el => formatSkill(el))));

        formatted.push(formatSkillTitle('strength Skill',
        [
            'athletics',
        ].map ( el => formatSkill(el))));

        return formatted;
    }

    const getHeroMainStats = () => {
        let formattedValues = [];
        for (const [stat, value] of Object.entries(heroStats))
            formattedValues.push((
                <div className='card createNewCard m-1 d-inline-block align-middle' style={{width: '13rem', height: 'auto'}}>
                    <img src={`/images/icons/${stat}Icon.JPG`} className='card-img-top'/>
                    <div className='card-body'>
                        <p className='card-text font-weight-bolder text-center font-size-3'>{stat[0].toUpperCase().concat(stat.slice(1))}: {value}</p>
                        <p className='my--1 card-text text-center font-size-4'>({getStatMod(value)})</p>
                        <p className='card-text text-center font-size-2'>Saving Throw: {getStatMod(value)}</p>
                    </div>
                </div>
            ));
        return formattedValues;
    }

    

    return (
        <Default title='Ez DnD - Heroes'>
            <header className='bg-dark w-100 py-1 sticky-top'>
                <a href='/'><image src='/images/icons/navIcon.JPG' className='rounded-circle navIcon d-inline-block mx-2'/></a>
                <h1 className='display-4 font-weight-bold text-white d-inline-block align-middle'><a href='/' className='text-decoration-none'>Ez DnD</a> / <a className='text-decoration-none' href='/heroes'>Heroes</a> / {data.heroName}</h1>
                <div className='d-inline-block text-right align-middle testDiv'>
                    <a className='text-decoration-none' href='/heroes/new'><h2 className='text-primary align-middle pt-3 px-4'>Add New Character</h2></a>
                </div>
            </header>
            <main>
                <div className='container d-flex flex-wrap justify-content-center'>
                
                    {/* Top info and edit buttons */}
                    <div className='card createNewCard w-100 m-1 pt-2 d-inline-block align-middle sticky-top sticky-top2'>
                        <p className='card-title font-size-4 p-4 d-inline m-4'>{data.heroName}</p>
                        <div className='card-body d-flex flex-no-wrap justify-content-evenly'>
                            <p className='btn btn-success text-left font-size-3'>HEAL</p>
                            <p className='btn btn-warning text-left font-size-3'>WOUND</p>
                            <p className='btn btn-danger text-left font-size-3'>KILL</p>
                            <p className='card-text font-weight-bolder text-center font-size-4'>HP: {data.lifeCurrent} / {data.lifeMax} - TEMP HP: {data.lifeTemp}</p>
                            <p className='btn btn-primary text-left font-size-3'>Edit Character</p>
                        </div>
                    </div>

                    {/* All of our main stats */}
                    <div className='w-100 d-flex flex-wrap justify-content-center'>
                        { getHeroMainStats() }
                    </div>

                    {/* Proficiencies */}
                    <div className='w-100 card m-1 createNewCard d-inline-block align-middle'>
                        <div className='w-80 p-2 m-3 text-center'>
                            <p className='font-size-4'>Proficiency Bonus: +{getProficiencyBonusTrue()}</p>
                            {getHeroProficiencies()}
                        </div>
                    </div>

                    

                    <div className='w-48 card m-1 createNewCard d-inline-block align-middle'>
                        <p className='card-title font-size-4 m-4'>Combat</p>
                        <div className='card-body d-flex flex-no-wrap justify-content-evenly'>
                            <p>AC and stuff</p>
                        </div>
                    </div>

                    <div className='w-48 card m-1 createNewCard d-inline-block align-middle'>
                        <p className='card-title font-size-4 m-4'>Proficiencies</p>
                        <div className='card-body d-flex flex-no-wrap justify-content-evenly'>                            
                            <p>Other proficiencies and languages</p>
                        </div>
                    </div>

                    <div className='w-100 card m-1 createNewCard d-inline-block align-middle'>
                        <p className='card-title font-size-4 m-4'>Features</p>
                        <div className='card-body d-flex flex-no-wrap justify-content-evenly'>
                            <p className='font-size-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestiae et, sint inventore deserunt, facere nihil praesentium ut beatae ducimus reiciendis natus id, commodi voluptatum modi pariatur eaque voluptas quis!</p>
                        </div>
                    </div>

                </div>

                <p id='deleteBtn' className='rounded my-3 w-25 d-block m-auto font-size-3 btn btn-danger'>Delete</p>

                <div id='overlay'></div>
                <dialog id='window'>
                    <form className='m-auto text-center font-size-3 justify-content-evenly' method='POST' action={`/heroes?index=${data.id}&_method=DELETE`}>
                        <input className='form-control w-25 my-3 m-auto' placeholder='Enter Username' id='uname' name='uname' required/>
                        <input className='form-control w-25 my-3 m-auto' placeholder='Enter Password' type='password' id='psw' name='psw' required/>
                        <span className='btn btn-primary mx-2' id='cancelDelete'>Cancel</span>
                        <input className='btn btn-danger mx-2' type='submit' value='Delete this Character!'/>
                    </form>
                </dialog>
                <script src='/scripts/heroDetails.js'/>
            </main> 
        </Default>
    );
}

module.exports = heroDetailsPage;