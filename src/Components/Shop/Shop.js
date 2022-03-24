import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( ()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data)) 
    },[]);
    console.log(products[3]);
    return (
        <div className='shop-container'>
            <div className='products-container'>
                 {products.map(product => (
                     <Product img={product.img} name={product.name} price={product.price} seller={product.seller} rating={product.ratings} key={product.id}/>
                 ))}
            </div>
            <div className='cart-container'>
                <h2>The cart will be here</h2>
            </div>
        </div>
    );
};

export default Shop;