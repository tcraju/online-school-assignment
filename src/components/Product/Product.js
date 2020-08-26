import React from 'react';
import './Product.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Col } from 'react-bootstrap';


const Product = (props) => {
    
    const { image, name, mentor, price } = props.product
    return (
       
            <Col md = {3} className = 'single-course'>
                <img src={image} alt="" />
                <br/>
                <h5>{name}</h5>
                <p>Mentor: {mentor}</p>
                <p> Price : $ {price}</p>
                <button className = "btn btn-primary m-6" onClick = {() => props.handleAddProduct (props.product)}> 
                    Enroll Now
                </button>
            </Col>

        





    );
};

export default Product;