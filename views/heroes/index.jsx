const React = require('react');
const Default = require('../default');

const heroIndexPage = ({data}) => {
    

    const getClassPicture = hClass => {
        switch (hClass) {
            case 'Barbarian': return '/images/portraits/portrait1.JPG'
            default: return '/images/portraits/portrait2.JPG'
        }
    }


    let noData = (<h5>No Hero data found</h5>);

    let formattedCards = data?.length > 0 ? data.map( el => 
        (
            <div id={`HERO${el.id}`} className='card m-1 d-inline-block align-middle' style={{width: '18rem', height: 'auto', cursor: 'pointer'}}>
                <img className='card-img-top' src={getClassPicture(el.class?.[0])} alt='Portrait1'/>
                <div className='card-body'>
                    <h5 className='card-title'>{el.heroName}</h5>
                    <p className='card-text'>{`A Lv${el.level?.reduce((e, i) => e + i) ?? 'Unknown'} ${el.race} ${el.class?.length > 1 ? 'multiclassed' : el.class[0]} hero played by ${el.playerName}`}</p>
                </div>
            </div>
        )
    ) : noData

    return (
        <Default title='Ez DnD - Heroes'>
            <header className='bg-dark w-100 py-1 sticky-top'>
                <a href='/'><image src='/images/icons/navIcon.JPG' className='rounded-circle navIcon d-inline-block mx-2'/></a>
                <h1 className='display-4 font-weight-bold text-white d-inline-block align-middle'><a href='/' className='text-decoration-none'>Ez DnD</a> / Heroes</h1>
                <div className='d-inline-block text-right align-middle testDiv'>
                    <a className='text-decoration-none' href='/heroes/new'><h2 className='text-primary align-middle pt-3 px-4'>Add New Character</h2></a>
                </div>
            </header>
            <main>
                <div className='container d-flex flex-wrap justify-content-around'>
                {formattedCards}
                </div>
            </main>
            <script src='/scripts/heroIndex.js'/>
        </Default>
    );
}

module.exports = heroIndexPage;