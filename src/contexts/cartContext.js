import React, {createContext, useContext, useState} from "react";


const cartContext = createContext();

//provider Component
export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);
    //cartItems: hold cart products
    //setCartItems: used to update the cart


    //Add to cart function 
    function  addToCart(product) {
        //updates value of cart based on previous value of cartItems
        setCartItems((prev) => {
            const found = prev.find(item => item.id === product.id);
            if(found) {
                //if already in cart , increase quantity
                return prev.map(item =>
                    item.id === product.id
                    ? {...item, quantity: item.quantity+1}
                    : item
                );
            }else {
                //if not in cart , add with quantity 1 
                return [...prev, {...product, quantity: 1}];
            }
        });
    }

    //Remove from cart function
    function removeFromCart(id) {
        setCartItems((prev)=> prev.filter(item => item.id !== id));
    }

    return (
        <cartContext.Provider value = {{ cartItems, addToCart, removeFromCart}} >
            {children}
        </cartContext.Provider>
    );

}

//custom hooks 
    export function useCart() {
        return useContext(cartContext);
    }