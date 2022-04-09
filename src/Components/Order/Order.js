import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts'; 
import { removeFromDb } from '../../Util/fakedb';
import Cart from '../Cart/Cart';
import OrderItem from '../OrderItem/OrderItem';

const Order = () => {
     const [products, setProducts] = useProducts();
     //getting cart data from local storage
     const [cart, setCart] = useCart(products);
     console.log(cart);
     const removeFromCart = item =>{
       const rest = cart.filter(product => product.id !== item.id);
       setCart(rest);
       removeFromDb(item.id);
     }
    return (
        <div className='shop '>
            <div className="products-container">
                {
                    cart.map(item =><OrderItem item={item} removeFromCart={removeFromCart} key={item.id}/> )
                 
                }
             </div>
             <div className="cart">
                <Cart cart={cart}> 
                </Cart>
             </div>
        </div>
    );
};

export default Order;