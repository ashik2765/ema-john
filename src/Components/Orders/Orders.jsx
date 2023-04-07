import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Orders.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart,setCart] = useState(savedCart);
    console.log(savedCart);
    const handleRemoveFromCart = (id) =>{
        const remeaning = cart.filter(product => product.id !== id);
        setCart(remeaning);
        removeFromDb(id)
    }
    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
            {
                cart.map(product =><ReviewItem
                key={product.id}
                product={product}
                handleRemoveFromCart={handleRemoveFromCart}
                
                ></ReviewItem>)
            }
            </div>
            <div className='card-container'>
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                   <Link className='link-btn' to='/checkout'>
                        <button className='btn-checkout-cart'>
                            Proceed Checkout
                            <FontAwesomeIcon  icon={faWallet} />
                        </button>
                   </Link> 
                </Cart>
            </div>
        </div>
    );
};

export default Orders;