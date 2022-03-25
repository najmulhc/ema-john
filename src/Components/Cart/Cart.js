import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cartLength} = props;
    return (
        <div className='cart-container'>
            <h2 className='order-sum'>Order Summary</h2>
            <div className="calculation">
                <p>Selected Items: {cartLength}</p>
                <p>Total Price: $1200</p>
                <p>Total Shipping Charge: $5 </p>
                <p>Tax: $23 </p>
            </div>
            <h3>Grand Total: $1553</h3>
        </div>
    );
};

export default Cart;