import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Container, Row, Col } from 'react-bootstrap';
import bannerImg from '../../images/banner-image.png'


const Shop = () => {

    const first14 = fakeData.slice(0, 14); //taking first 14 from all (16)
    const [products, setProducts] = useState(first14);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {

        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <>
            <Container>
                <Row className='banner-area'>
                    <Col md={3} className='d-none d-md-block' >
                        <h4>Learn any suitable <br />  course with Us........</h4>
                    </Col>
                    <Col md={6} sm={6}>
                        <img src={bannerImg} alt="" />
                    </Col>

                    <Col md={3} sm={6}>
                        <Cart cart={cart}></Cart> 
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    {
                        products.map(pd => <Product
                            handleAddProduct={handleAddProduct}
                            product={pd}>
                        </Product>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Shop;

// Since Cart variable is needed & I wanted to show it on banner area, banner area is included here.
// Else I would make banner component. 