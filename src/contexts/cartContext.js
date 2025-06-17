import React, {createContext, useContext, useState, useEffect, useRef} from "react";


const cartContext = createContext();

//provider Component
export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);
    const ws = useRef(null);
    //cartItems: hold cart products
    //setCartItems: used to update the cart

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080");
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);

            setCartItems((prev) => 
            prev.map((item) =>
            item.id === data.productId ? {...item, stock: data.stock} : item));
        };

        return () => {
            ws.close();
        };
    }, []);


    //Add to cart function 
    function  addToCart(product) {
        //updates value of cart based on previous value of cartItems
        setCartItems((prev) => {
            const found = prev.find(item => item.id === product.id);
            if(found) {

                if(found.quantity < product.stock) {
                    return prev.map(item =>
                    item.id === product.id
                    ? {...item, quantity: item.quantity+1}
                    : item);
                } else {
                    alert("No more stock available for this product.");
                    return prev;
                }
            } else {
                if(product.stock > 0) {
                    return [...prev, {...product, quantity: 1}];
                }else{
                    alert("Product out of stock.");
                    return prev;
                }
            }    
        });
    }

    //Decrease the quantity
    function decreaseQuantity(id) {
        setCartItems(prev => 
            prev
              .map(item => 
                item.id === id 
                ? { ...item, quantity: item.quantity -1}
                : item
              )
              .filter(item => item.quantity>0)
        );
    }

    //Remove from cart function
    function removeFromCart(id) {
        setCartItems((prev)=> prev.filter(item => item.id !== id));
    }

    return (
        <cartContext.Provider value = {{ cartItems, addToCart, removeFromCart, decreaseQuantity}} >
            {children}
        </cartContext.Provider>
    );

}

//custom hooks 
    export function useCart() {
        return useContext(cartContext);
    }