import React from 'react';
import { Col, Form } from 'react-bootstrap';
import Header from '../Header/Header';

const ShoppingCart = () => {
    return (
        <div >
            <Header />
            <div className="container mt-5">
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            Customer's Name
    </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" placeholder="Name" />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            Customer's Phone Number
    </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" placeholder="Phone Number" />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            Customer's Address
    </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" placeholder="Address" />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label column="lg" lg={2}>
                            Total Amount($)
    </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" placeholder="Amount" />
                        </Col>
                    </Form.Row>
                    

                </Form.Group>
                <br/>
                <button to="/" id="login-button"><a style={{ textDecoration: 'none', color: 'white' }} href="/login" >Place Order</a></button>
                
            </div>
        </div>
    );
};

export default ShoppingCart;