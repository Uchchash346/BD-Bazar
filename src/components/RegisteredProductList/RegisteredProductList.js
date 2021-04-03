import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';


const RegisteredProductList = ({ registeredProduct, deleteRegisteredProduct }) => {
    const history = useHistory();
    return (
        <div className='row mt-1 mx-2 mb-2 pt-0 px-1 pb-1 border-bottom d-flex align-items-center'>
            <div className='col-md-2'>
                <p>{registeredProduct.name}</p>
            </div>
            <div className='col-md-3'>
                <p>{registeredProduct.weight}</p>
            </div>
            <div className='col-md-3'>
                <p>{registeredProduct.price}</p>
            </div>
            <div className='col-md-1'>
                <button className='btn text-white btn-danger' onClick={() => deleteRegisteredProduct(registeredProduct._id)}>
                    <FontAwesomeIcon icon={faTrash} /></button>
            </div>
            <div className='col-md-3'>
                <p><FontAwesomeIcon icon={faEdit} /></p>
            </div>
        </div>

    );
};

export default RegisteredProductList;