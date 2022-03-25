import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <nav>
                <ul> 
                    <li>
                        <a href="./Home">Shop</a>
                    </li>
                    <li>
                        <a href="./Home">Order</a>
                    </li>
                    <li>
                        <a href="./Home">Inventory</a>
                    </li>
                    <li>
                        <a href="./Home">About</a>
                    </li>
                   
                </ul>
            </nav>
        </div>
    );
};

export default Header;