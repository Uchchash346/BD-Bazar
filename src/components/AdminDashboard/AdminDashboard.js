import React, { useState } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import manageProductIcon from '../../images/icons/grid 1.png'
import addProductIcon from '../../images/icons/plus 1.png'
import editProductIcon from '../../images/icons/edit 1.png'
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [productList, setProductList] = useState(true);
    const handleProductItemsList = () => {
        setProductList(true);
    }
    const handleAddProduct = () => {
        setProductList(false);
    }
    return (
        <div style={{ background: '#E5E5E5', minHeight: '100vh' }}>
            <div className='d-flex mb-5' >
                <div style={{ background: '#363958', minHeight: '100vh', minWidth: '250px' }} className='pr-5'>
                    <Link id="company-tag" to="/home" className='brand-img admin-dashboard-section-area' style={{ textDecoration: 'none' }}>
                        <h2 style={{ height: '50px', marginLeft: '40px' }}>Food Bazar</h2>
                    </Link>
                    <div className='container mt-4 ml-3'>
                        <Link className="admin-dashboard-section-area" onClick={handleProductItemsList} style={{ textDecoration: 'none' }}>
                            <span className="admin-dashboard-section-area" style={{ fontSize: '15px' }}><img style={{ height: '17px', marginRight: '3px' }} src={manageProductIcon} alt="" />Manage Product</span>
                        </Link>
                    </div>
                    <div className='container mt-2 ml-3'>
                        <Link className="admin-dashboard-section-area" onClick={handleAddProduct} style={{ textDecoration: 'none' }}>
                            <span className="admin-dashboard-section-area" style={{ fontSize: '15px' }}><img style={{ height: '17px', marginRight: '3px' }} src={addProductIcon} alt="" />Add Product</span>
                        </Link>
                    </div>
                    <div className='container mt-2 ml-3'>
                        <Link onClick={handleAddProduct} style={{ textDecoration: 'none' }}>
                            <span className="admin-dashboard-section-area" style={{ fontSize: '15px' }}><img style={{ height: '17px', marginRight: '3px' }} src={editProductIcon} alt="" />Edit Product</span>
                        </Link>
                    </div>
                </div>

                <div style={{ width: '100%' }}>
                    <h4 className='bg-light d-block pb-4 font-weight-bold pl-2 '>Manage Product</h4>
                    {/* conditional  render */}
                    {productList ? <ManageProduct /> : <AddProduct />}
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default AdminDashboard;