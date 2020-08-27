import React from 'react';
import  './Cart.css'
import { Table } from 'react-bootstrap';


const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + parseFloat(product.price)
    }

    const productPrice = total.toFixed(2) // fixing two decimal place
    const tax = parseFloat(total/10).toFixed(2); //10% of total
    const grandTotal = (parseFloat(productPrice) + parseFloat (tax)).toFixed(2)

    return (
        <div >
            <Table className = 'cart-area'> 
                <tbody>
                    <tr>
                        <td>Course Enrolled</td>
                        <td>:</td>
                        <td>{cart.length}</td>
                    </tr>

                    <tr className='top-border'>
                        <td>Product Price</td>
                        <td>:</td>
                        <td>{productPrice}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>:</td>
                        <td>{tax}</td>
                    </tr>

                    <tr className='top-border'>
                        <td>Total Price</td>
                        <td>:</td>
                        <td >{grandTotal}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Cart;