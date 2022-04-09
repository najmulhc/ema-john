import React from 'react';
import './OrderItem.css'
const OrderItem = (props) => {
    const {item, removeFromCart} = props;
    return (
        <div className='order-item-container'>
          <img src={item.img} className='order-img' alt="" />
          <div className="item-info">
              <h1 className='order-item-name'>{item.name}</h1>
              <h3 className='order-item-price'>Price: <span id='orange-color'>{item.price}</span></h3>
              <h3 className='order-item-price'>Shipping Charge: <span id='orange-color'>{item.shipping}</span></h3>
          </div>
          <button className='order-item-delete' onClick={() => removeFromCart(item)}>Delete</button>
        </div>
    );
};

export default OrderItem;