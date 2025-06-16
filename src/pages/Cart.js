import React from "react"
import { useCart } from "../contexts/cartContext";

function Cart () {

    const {cartItems, removeFromCart} = useCart();

    return(
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>The cart is empty .</p>
            ): (
                <div>
                {cartItems.map(item => (
                    <div key={item.id}>
                        <span>
                            {item.title} (x{item.quantity}) - Rs.{item.price * item.quantity}
                        </span>
                        <button onClick={() =>
                            removeFromCart(item.id)}>Remove</button>
                    </div>
                ))}
                </div>
            )}
            
        </div>
    );
}

export default Cart;