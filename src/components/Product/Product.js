import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props.product);
    const {name,img,seller,price,stock} = props.product
    return (
        <div className="product-single">
            <div>
                <img src={img} alt=""/>
            </div>
            <div class="product-item">
                <h2 class="product-name">{name}</h2>
                <p>by: {seller}</p>
                <p class="product-price">Price ${price}</p>
                <p>Only {stock} left stock - order soon</p>
                <button onClick={()=> props.handleAddCart(props.product)} class="main-button" ><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;