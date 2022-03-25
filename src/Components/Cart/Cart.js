import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cartLength} = props;
    return (
        <div className='cart-container'>
            <h1>You have {cartLength} items in your cart</h1>
        </div>
    );
};

export default Cart;