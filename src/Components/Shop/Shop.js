import React, { useEffect, useState } from 'react';
import {  getData,addToDb  } from '../../Util/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
         
        // if the the product is new to the cart
        if(product.quantity === 0){
          console.log("new product for the cart"); 
          product.quantity = 1;
         let newCart = [...cart, product];
         console.log(newCart);
         setCart(newCart);
        
        }
        else{
            let newCart = [...cart];
            let productIndex=  newCart.indexOf(product);
            newCart[productIndex].quantity++;
            console.log(newCart[productIndex].quantity);
            setCart(newCart)
        } 

         
         addToDb(product.id);
    }
    useEffect( () =>{ 
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data)) 
    },[]); 

    // getting data from database
    useEffect( () =>{ 
        const localCart = getData();  
        const ourCart = []; 
        for(const id in localCart){
            const addedProduct = products.find(product => id === product.id);   
            if(addedProduct){
                const quantity = localCart[id]; 
                addedProduct.quantity = quantity;
                ourCart.push(addedProduct);
            }
        }  
        if(ourCart[0]){
            setCart(ourCart);
        }
    }, [products] );
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