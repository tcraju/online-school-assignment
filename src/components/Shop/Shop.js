import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../images/Banner.jpg'

const Shop = () => {
    // console.log(fakeData);
    const first12 = fakeData.slice(0, 12);
    const [products, setProducts] = useState(first12);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {

        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <Container>
            <Row>
                <Col md = {9} className = 'banner-area'>
                    <img src={banner} alt=""/>
                    <h4>Learn any suitable course with Us........</h4>
                </Col>
                <Col md = {3}>
                    <Cart cart={cart}></Cart>
                </Col>
                
            </Row>
            <Row>
                {
                    products.map(pd => <Product
                        handleAddProduct={handleAddProduct}
                        product={pd}>
                    </Product>)
                }
            </Row>
        </Container>
    );
};

export default Shop;