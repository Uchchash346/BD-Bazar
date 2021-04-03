import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";

const SingleProduct = (props) => {
    const { id, name, imageURL, price } = props.product;
    const history = useHistory();
    return (
        <div className="col-md-4 p-3 my-3">
            <Card>
                <Card.Img variant="top" src={`${imageURL}`} />
                <Card.Body>
                    <div className="text-center">
                        <Card.Title>{name}</Card.Title>
                        <div className="row">
                            <h3 className="col">${price}</h3>
                            <Button to="/login"  href="/login"  style={{ backgroundColor: '#363958' }} className="col" onClick={() => history.push(`/product/${id}`)} variant="primary">Buy Now</Button>
                        </div>

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProduct;