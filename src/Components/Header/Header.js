import React from 'react';
import './Header.css';
import logo from'../../images/Logo.svg';

const Header = () => {
    return (
         <header>
             <img src={logo} alt='logo inforamtion'/>
            <nav>
            <ul>
                <li >
                    <a href='/shop'>Shop</a>
                    <a href='/order'>Order</a>
                    <a href='/inventory'>Inventory</a>
                    <a href='/about-us'>About Us</a>
                </li>
            </ul>
            </nav>
         </header>
    );
};

export default Header;