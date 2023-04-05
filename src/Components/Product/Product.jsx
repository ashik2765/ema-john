import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img,name,price,rating,seller,quantity}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <p>Quantity: {quantity}</p>
            <p>Manufacturer: {seller}</p>
            <button>Buy Now</button>
        </div>
    );
};

export default Product;