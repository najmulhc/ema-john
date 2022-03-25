import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let price = 0;
    let shipping = 0;
    let tax = 0;
    cart.map(product => {
        price += product.price;
        shipping += product.shipping;
        tax = (price+shipping)*.15;
        tax = parseFloat(tax.toFixed(2));
        return tax;
    })
    const grandTotal = tax + shipping + price;
    return (
        <div className='cart-container'>
            <h2 className='order-sum'>Order Summary</h2>
            <div className="calculation">
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${price}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax} </p>
            </div>
            <h3>Grand Total: ${grandTotal}</h3>
        </div>
    );
};

export default Cart;