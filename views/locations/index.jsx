const React = require('react');
const Default = require('../default');

const locationsIndexPage = ({data}) => {
    
    let noData = (<h5>No Location data found</h5>);

    let formattedCards = data?.length > 0 ? data.map( el => 
        (
            <div id={`LOCATION${el.id}`} className='card m-5 d-inline-block align-middle' style={{width: '18rem', height: 'auto', cursor: 'pointer'}}>
                <img className='card-img-top' src='/images/landscape1.JPG' alt='Landscape1'/>
                <div className='card-body'>
                    <h5 className='card-title'>{el.locationName}</h5>
                </div>
            </div>
        )
    ) : noData

    return (
        <Default title='Ez DnD - Heroes'>
            <header className='bg-dark w-100 py-1 sticky-top'>
                <a href='/'><image src='/images/icons/navIcon.JPG' className='rounded-circle navIcon d-inline-block mx-2'/></a>
                <h1 className='display-4 font-weight-bold text-white d-inline-block align-middle'><a href='/' className='text-decoration-none'>Ez DnD</a> / Locations</h1>
                <div className='d-inline-block text-right align-middle testDiv'>
                    <a className='text-decoration-none' href='/locations/new'><h2 className='text-primary align-middle pt-3 px-4'>Add New Location</h2></a>
                </div>
            </header>
            <main>
                <div className='container d-flex flex-wrap justify-content-around'>
                {formattedCards}
                </div>
            </main>
            <script src='/scripts/locationIndex.js'/>
        </Default>
    );
}

module.exports = locationsIndexPage;