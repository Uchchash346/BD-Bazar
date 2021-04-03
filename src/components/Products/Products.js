import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([])
    const apiKey = 'c7d13be27426112234663a24c18ade20'
    useEffect(() =>{
        fetch(`http://localhost:5000/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    products.map((product) => <SingleProduct key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;