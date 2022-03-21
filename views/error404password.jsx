const React = require('react');
const Default = require('./default');

const error404Page = () => {
    return (
        <Default>
            <header className='bg-dark w-100 py-1 sticky-top'>
                <a href='/'><image src='/images/icons/navIcon.JPG' className='rounded-circle navIcon d-inline-block mx-2'/></a>
                <h1 className='display-4 font-weight-bold text-white d-inline-block align-middle'><a href='/' className='text-decoration-none'>Ez DnD</a></h1>
            </header>
            <body style={{overflow: 'hidden'}}>
                <main>
                    <p className='font-size-4 text-white text-center'>That was an incorrect password!</p>
                    <img src='https://http.cat/404/' alt='A picture of a 404 cat error' className='m-auto d-block w-50 pt-5'/>
                </main>
            </body>
        </Default>
    );
};

module.exports = error404Page;