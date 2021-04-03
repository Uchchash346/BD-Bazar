import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { ProductItemContext } from '../../App';
import GridLoader from "react-spinners/GridLoader";
import './Home.css';


const Home = ({ item }) => {
    const { id } = useParams();
    const [productItem, setProductItem] = useContext(ProductItemContext)
    const [loading, setLoading] = useState(false);

    let history = useHistory()
    const handleProductItems = (productItem) => {
        const productLink = productItem.split('')
        history.push(productLink[0])
        setProductItem('/products' + item);
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000)
    }, [])
    return (
        <div className="products-area">
            {/* Spinner using conditional rendering */}
            {
                loading ?
                    <GridLoader
                        color={"#363958"}
                        loading={loading}
                        size={15} />
                    :
                    <div className="container my-5">

                        <div className="row">
                            <div className="col-md-6">
                                <img src={handleProductItems.src} alt="" />
                            </div>
                            <div className="col-md-6">
                                {/* <h3>{handleProductItems.name}</h3> */}
                                <p>{handleProductItems.price}</p>
                            </div>
                        </div>

                    </div>
            }
        </div>

    );
};
export default Home;