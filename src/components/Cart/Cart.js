import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price,0);
    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 0;
    }

    let tax = (total / 10).toFixed(2)
    return (
        <div>
             <h2>Review summery</h2>
            <h3>Items Orders: {cart.length}</h3>
            <p>tax: {tax}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Total price: {total + shipping + tax}</p>
        </div>
    );
};

export default Cart;