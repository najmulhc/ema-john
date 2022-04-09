import { useEffect, useState } from "react";
import { getData } from "../Util/fakedb"; 

const useCart = (products) =>{
  
  const [cart, setCart] = useState([]);
    useEffect( () => {
        //getting id info from local storage
        const storedCart = getData(); 
        // it will store the products which id has been found on local storage
        const savedCart = [];
        // looping through every property in the local storage object (we use for in loop to loop through object)
        for(const id in storedCart){
            // finding if a product of products includes the id we are looping
            const addedProduct = products.find(product => product.id === id);
            //if the product exist in the products, we will store  in on savedProduct array along with its quantity(quantity was the value of the id property on local storage)
            if(addedProduct){
                addedProduct.quantity = storedCart[id];
                console.log(addedProduct);
                savedCart.push(addedProduct);

            }
        }
        // finally we setting the savedCart data to the main cart and retruning it
        setCart(savedCart)
    },[products])
    return [cart, setCart]
}
export default useCart;