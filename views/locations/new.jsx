const React = require('react');
const Default = require('../default');

const newLocationPage = () => {
    
    

    return (
        <Default title='Ez DnD - Heroes'>
            <header className='bg-dark w-100 py-1 sticky-top'>
                <a href='/'><image src='/images/icons/navIcon.JPG' className='rounded-circle navIcon d-inline-block mx-2'/></a>
                <h1 className='display-4 font-weight-bold text-white d-inline-block align-middle'><a href='/' className='text-decoration-none'>Ez DnD</a> / <a href='/locations' className='text-decoration-none'>Locations</a> / New</h1>
                <div className='d-inline-block text-right align-middle testDiv'>
                </div>
            </header>
            <main>
                <div className='container d-flex flex-wrap justify-content-around'>
                    STUB
                </div>
            </main>
            <script src='/scripts/locationIndex.js'/>
        </Default>
    );
}

module.exports = newLocationPage;