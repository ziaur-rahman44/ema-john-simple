import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';




const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-area">
            <div className="shop-container">
                {
                    products.map(pd => <Product handleAddCart={handleAddCart} product={pd}></Product>)
                }
            </div>
            <div className="shop-card">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;