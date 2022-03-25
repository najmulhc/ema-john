import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    useEffect( () =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]); 
    return (
        <div className='shop'>
            <div className="products">
                {products.map(product =>{
                        return(
                            <Product 
                            product= {product} 
                            key= {product.id}
                            addToCart = {addToCart}
                            />
                        )})}
            </div>
            <Cart
                cart={cart}
            />
        </div>
    );
};

export default Shop;