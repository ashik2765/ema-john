import React, { useEffect } from 'react';
import './Cart.css';
import { getShoppingCart } from '../../utilities/fakedb';

const Cart = ({cart}) => {
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
        }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;
    
   
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: BDT {total}</p>
            <p>Shipping: BDT {totalShipping}</p>
            <p>Tax: BDT {tax.toFixed(2)}</p>
            <h4> Grand Total: BDT {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;