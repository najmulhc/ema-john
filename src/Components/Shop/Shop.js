import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);

    // event handler that can bring data(if event fired) from the particuler product component
    const addToCart = (name ) =>{
         console.log("You have clicked: ",name.name);
    }
    //fetching fake data fron public folder
    useEffect( ()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data)) 
    },[]); 
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {products.map(product => (
                    <Product 
                        product = {product}
                        key = {product.id}
                        addToCart = {addToCart}
                    />
                ))}
            </div>
            <div className='cart-container'>
                <h2>The cart will be here</h2>
            </div>
        </div>
    );
};

export default Shop;