import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div>
                <h1>Royal-Bikes</h1>
            </div>
            <ul>
                <li><CustomLink to='/'>Home</CustomLink></li>
                <li><CustomLink to='/inventory'>Inventory</CustomLink></li>
            </ul>
        </nav>
    );
};

export default Header;