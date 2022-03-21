const React = require('react');
const Default = require('../default');

const heroSchema = require('../../models')

let inputPattern = /^[\da-z]+$/i;

const newHeroPage = () => {
    return (
        <Default title='Ez DnD - Heroes - New'>
            <header className='bg-dark w-100 py-1 sticky-top'>
                <a href='/'><image src='/images/icons/navIcon.JPG' className='rounded-circle navIcon d-inline-block mx-2'/></a>
                <h1 className='display-4 font-weight-bold text-white d-inline-block align-middle'><a href='/' className='text-decoration-none'>Ez DnD</a> / <a href='/heroes' className='text-decoration-none'>Heroes</a> / New</h1>
            </header>
            <main>
                <h2 className='display-1 text-center text-white'>Create a new Hero</h2>
                <form className='m-auto text-center font-size-3' method='POST' action='/heroes'>
                    <div className='container d-flex flex-wrap justify-content-center'>

                        {Object.entries(heroSchema.Heroes.schema.obj).map(el => 
                            (
                                el[1].description == null ? null :

                                <div id={`hstat`} className='card createNewCard mx-1 d-inline-block align-middle' style={{width: '12rem', height: 'auto'}}>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{el[1].title}</h5>
                                        <p className='card-text'>{el[1].description}</p>
                                        <div className='form-group'>
                                            <input className='form-control' id={el[0]} name={el[0]} required/>
                                        </div>
                                    </div>
                                </div>
                            ))}

                    </div>
                    
                    <input className='form-control w-25 my-3 m-auto' placeholder='Enter Username' id='uname' name='uname' required></input>
                    <input className='form-control w-25 my-3 m-auto' placeholder='Enter Password' type='password' id='psw' name='psw' required></input>
                    <input className='btn btn-primary w-50 font-size-4 my-5' type='submit' value='Submit New Character'/>
                </form>
            </main>
        </Default>
    );

}

module.exports = newHeroPage;