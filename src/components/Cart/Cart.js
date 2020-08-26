import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prod) => total + prod.price, 0) 
    
    // or
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + parseFloat(product.price)
    }

    const productPrice = total.toFixed(2)

    const tax = parseFloat(total/10).toFixed(2); //10% of total
    const grandTotal = (parseFloat(productPrice) + parseFloat (tax)).toFixed(2)

    return (
        <div>
           <h4>Cart Summery  </h4> 
           <p>Course Enrolled : {cart.length}  </p>
           <p>Product Price : {productPrice}</p>
           <p>Tax : {tax}</p>
           <p>Total Price : {grandTotal}</p>
        </div>
    );
};

export default Cart;