import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    
    let totalPrice=0;
    let totalShipping=0;
    for (const cartProduct of cart) {
     
     totalPrice = totalPrice + cartProduct.price;  
     totalShipping=totalShipping + cartProduct.shipping;
    }
    
    const tax= totalPrice*(7/100);
    const total= totalPrice+totalShipping+ tax;
    return (
        <div className='Cart' >
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price :{totalPrice}</p>
            <p>Total Shipping : {totalShipping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <h6>Grand Total : {total.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;