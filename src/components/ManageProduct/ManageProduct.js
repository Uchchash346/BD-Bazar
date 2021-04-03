import React, { useEffect, useState } from 'react';
import RegisteredProductList from '../RegisteredProductList/RegisteredProductList';


const ManageProduct = () => {
    // const [manageProducts, setManageProducts] = useState([]);
    const [products, setProducts] = useState([])
    // const apiKey = 'c7d13be27426112234663a24c18ade20'

    
    // fetch data for already registered event for admin
    useEffect(() =>{
        fetch(`http://localhost:5000/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])


    // fetch refresh the page 
    const refreshUI = () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }


    // delete product
    const deleteRegisteredProduct = (id) => {
        fetch(`http://localhost:5000/deleteRegisteredProduct/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    refreshUI();
                }
            })
    }
    return (
        <div>
            <div style={{ minWidth: '1030px' }} className='bg-light mx-4 mt-4 border rounded mb-3'>
                <div className='d-flex flex-column container'>
                    <div className='d-flex row p-3 mx-2 mt-3 border rounded'>
                        <div className='col-md-2'>
                            <p className='font-weight-bold'>Name</p>
                        </div>
                        <div className='col-md-3'>
                            <p className='font-weight-bold'>Wight</p>
                        </div>
                        <div className='col-md-3'>
                            <p className='font-weight-bold'>Price</p>
                        </div>
                        <div className='col-md-1'> 
                            <p className='font-weight-bold'>Action</p>
                        </div>
                    </div>

                    {/* passing the  data to registeredProductList*/}
                    <div className='registered-event-container'>
                        {
                            products.map(registeredProduct => <RegisteredProductList registeredProduct={registeredProduct} deleteRegisteredProduct={deleteRegisteredProduct} key={registeredProduct._id} />)
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;