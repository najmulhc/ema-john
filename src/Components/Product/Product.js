import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name,price, seller, rating } = props.product;  
    const {addToCart} = props;
    return (
        <div>
            <img src={img} className='product-img' alt="" />
            <h3 className='product-name'>{name}</h3>
            <h2 className='price'>Price: ${price}</h2>
            <h3>Manufecturer: {seller}</h3>
            <h3>User Ratings: {rating} stars</h3>
            <button className='cart-button' onClick={()=> addToCart(props.product)}>Add to cart</button>
        </div>
    );
};

export default Product;