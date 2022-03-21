const React = require('react');
const Default = require('../default');

const locationDetailsPage = ({data}) => {

    return (
        <Default title='Ez DnD - Heroes'>
            <header className='bg-dark w-100 py-1 sticky-top'>
                <a href='/'><image src='/images/icons/navIcon.JPG' className='rounded-circle navIcon d-inline-block mx-2'/></a>
                <h1 className='display-4 font-weight-bold text-white d-inline-block align-middle'><a href='/' className='text-decoration-none'>Ez DnD</a> / <a className='text-decoration-none' href='/locations'>Locations</a> / {data.locationName}</h1>
            </header>
            <main>
                <div className='container my-4'>
                    <div className='card createNewCard p-5'>
                        { data.locationNotes.split('\n').map( e => (<p className='font-size-3'>{e}</p>)) }
                    </div>
                </div>
            </main>
        </Default>
    );
}

module.exports = locationDetailsPage;