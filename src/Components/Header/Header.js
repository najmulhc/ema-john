import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
           <Link to='/'>
            <img src={logo} alt="" />
           </Link>
            <nav>
                <ul> 
                    <li>
                         <Link to='/'>Home</Link>
                    </li>
                    <li>
                         <Link to='/'>Shop</Link>
                    </li>
                    <li>
                         <Link to='/orders'>Orders</Link>
                    </li>
                    <li>
                         <Link to='/inventory'>Manage Inventory</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;