import React from 'react';
import logo from '../../../assets/icons/logo.svg';


function Header() {

    return (
        <header className='py-4 sticky left-0 top-0 bg-gray-950 '>
            <div className="container flex items-center gap-4">
                <a className='w-9 h-9 text-gray-100' href="/">
                    <img src={logo} alt="Finde GitHub User " />
                </a>
            <h2 className='text-lg md:text-4xl text-gray-100 font-semibold'>
                    Finde GitHub User by username
                </h2> 
            </div>
        </header>
    )
};

export default Header;