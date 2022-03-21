const React = require('react');
const Default = require('./default');

const homePage = () => {
    let cards = [
        {
            title: 'Heroes',
            img: '/images/portraits/portrait1.JPG',
            desc: 'All of the heroes in this tale',
            location: 'LINKheroes',
        },
        {
            title: 'Other Characters',
            img: '/images/portraits/portrait2.JPG',
            desc: 'Every friend that we\'ve made along the way  *NOT IMPLEMENTED',
            location: 'LINKcharacters'
        },
        {
            title: 'Locations',
            img: '/images/landscape1.JPG',
            desc: 'Chakfa to Ashten',
            location: 'LINKlocations'
        },
        {
            title: 'Common Spells',
            img: '/images/spell1.JPG',
            desc: 'Common and well used spells *NOT IMPLEMENTED',
            location: 'LINKspells'
        },
        {
            title: 'Common Actions',
            img: '/images/action1.JPG',
            desc: 'Common actions to use in and out of combat *NOT IMPLEMENTED',
            location: 'LINKactions'
        },
        {
            title: 'Other Basic Notes',
            img: '/images/notes1.JPG',
            desc: 'All the notes we\'ve written about this tale',
            location: 'LINKnotes'
        },
    ];
    return (
        <Default>
            <header className='bg-dark w-100 py-1 sticky-top'>
                <a href='/'><image src='/images/icons/navIcon.JPG' className='rounded-circle navIcon d-inline-block mx-2'/></a>
                <h1 className='display-4 font-weight-bold text-white d-inline-block align-middle'>Ez DnD</h1>
                <div className='d-inline-block text-right align-middle testDiv'>
                    <a className='text-decoration-none' href='/login'><h2 className='text-primary align-middle pt-3 px-4'>Login</h2></a>
                </div>
            </header>
            <main>

                
                <div className='container w-100 my-5 d-flex flex-wrap justify-content-center'>
                {
                    cards.map( el => 
                        (
                            <div id={el.location} className='card m-2 d-inline-block align-middle' style={{width: '18rem', height: 'auto', cursor: 'pointer'}}>
                                <img className='card-img-top' src={el.img} alt='Portrait1'/>
                                <div className='card-body'>
                                    <h5 className='card-title'>{el.title}</h5>
                                    <p className='card-text'>{el.desc}</p>
                                </div>
                            </div>
                        )
                    )
                }
                </div>
                <script src='/scripts/home.js'/>
            </main>
        </Default>
    );
};

module.exports = homePage;