import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>

            <div className="title">
           
                <h1>Quiz-Pro</h1>

            </div>


            <div className="nav">
           
            <Link to="/">Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blog'>Blog</Link>

            </div>
        </div>
    );
};

export default Header;