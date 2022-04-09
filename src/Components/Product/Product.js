import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name, img, price, seller, ratings} = props.product;
    const {addToCart} = props;
    return (
        <div className='single-product'>
            <img src={img} className='product-img' alt="" />
           <div className="product-info">
           <h2 className='name'>{name}</h2>
            <h3 className='price'>Price: ${price}</h3>
            
           </div>
           <div className="seller-info">

                <p>Manufacturer: {seller} </p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button className='cart-btn' onClick={() => addToCart(props.product)} > Add to cart
            </button>
        </div>
    );
};

export default Product;