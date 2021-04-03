import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import RegisteredProductList from '../RegisteredProductList/RegisteredProductList';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    const apiKey = 'c7d13be27426112234663a24c18ade20'
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    products.map((product) => <RegisteredProductList key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default AllProducts;