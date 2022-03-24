import React from 'react';
import './Header.css';
import logo from'./Logo.svg';

const Header = () => {
    return (
         <header>
             <img src={logo} alt='logo inforamtion'/>
            <nav>
            <ul>
                <li >
                    <a href='https://www.amazon.com' >Order</a>
                    <a href='#' >Order Review</a>
                    <a href='#' >Manage inventory</a>
                </li>
            </ul>
            </nav>
         </header>
    );
};

export default Header;