import React from "react"
import { useCart } from "../contexts/cartContext";
import "./Cart.css";

function Cart() {
    const {cartItems, addToCart, removeFromCart, decreaseQuantity} = useCart();

    const totalPrice = cartItems.reduce(
        (sum, item) => sum+ item.price * item.quantity, 0
    );


    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (<p>The cart is empty</p>) : 
            (
                <div> 
                    {cartItems.map(item => (
                        <div className="cart-row" key={item.id}>
                            <img className="cart-img" src={item.thumbnail} alt={item.title} />
                            <span className="cart-title">{item.title}</span>  
                            

                            <div className="cart-qty-box">
                                
                                <button className="cart-btn"
                                onClick={()=> decreaseQuantity(item.id)}
                                disabled={item.quantity === 1}
                                > - </button>

                                <span className="cart-qty">{item.quantity} </span>
                                <button className="cart-btn"
                                onClick={() => addToCart(item)}
                                > + </button>
                            </div>

                            <span className="cart-price">
                                $.{item.price * item.quantity}
                            </span>

                            <button className="cart-remove"
                            onClick={() => removeFromCart(item.id)}
                            > Remove </button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <strong>Total: </strong> ${totalPrice}
                    </div>
                </div>
            )}
        </div>
    )
}


export default Cart;