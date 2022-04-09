import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    
    // cart calculation 

    let tax = 0;
    let shipping = 0;
    let finalPrice = 0; 
    let grandTotal = tax + shipping + finalPrice;

    if(cart[0]){
        for(let item of cart){
          if(!item.quantity){
              item.quantity =1;
          }
          finalPrice += item.price*item.quantity;
            tax = finalPrice*0.15;
            shipping += item.shipping;
            grandTotal = finalPrice + shipping + tax;
        }
    }
    const taxTotal = tax.toFixed(2)
    const total = grandTotal.toFixed(2)

    // display cart 
    return (
        <div className='cart-container'>
            <h2 className='order-sum'>Order Summary</h2>
            <div className="calculation">
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${finalPrice}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${taxTotal} </p>
            </div>
            <h3>Grand Total: ${total}</h3>
        </div>
    );
};

export default Cart;