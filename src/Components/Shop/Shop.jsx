import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])
    console.log(products)
    return (
        <div className='shop-container'>
            <div className="product-container">
            <h2>Product coming here</h2>
            {
                products.map(product=><p>{product.name}</p>)
            }
            </div>
            <div className="card-container">
                <h3>Order summary</h3>
            </div>
        </div>
    );
};

export default Shop;