import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
const AddProduct = () => {

    const { register, handleSubmit, error } = useForm();
    const [imageURL, setImageURL] = useState(null);
    console.log(imageURL)
    const onSubmit = data => {
        const eventData = {
          name: data.name,
          imageURL: imageURL,
          weight: data.weight,
          price: data.price
        };
        const url = `http://localhost:5000/addProduct`;
        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(eventData)
        })
        .then(res => res.json())
      };
      const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'c7d13be27426112234663a24c18ade20');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
            
          setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
    
      }
    return (
        <div style={{ minWidth: '1030px' }} className='bg-light mx-4 mt-4 border rounded mb-3 p-5'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='row d-flex justify-content-center'>
                    <div className='col-md-6'>
                        <label for='name'>Product Name</label>
                        <input className='form-control mb-2' type="text" placeholder="Enter Name" name="name" ref={register({ required: true, maxLength: 80 })} />
                    </div>
                    <div className='col-md-6'>
                        <label for='weight'>Weight</label>
                        <input className='form-control mb-2' type="text" placeholder="Enter Wight" name="weight" ref={register({ required: true, maxLength: 80 })} />
                    </div>
                    
                    <div className='col-md-6 mb-3'>
                        <div className="form-group">
                            <label for="price">Add Price</label>
                            <textarea name="Description" placeholder="Enter Price" className="form-control" name="price" id="exampleFormControlTextarea1" rows="3" ref={register({ required: true })} ></textarea>
                        </div>
                    </div>
                    <div className='col-md-6' style={{ marginTop: '30px' }}>
                        <div className="custom-file">
                           <label for='name'>Add Photo</label>
                            <br />
                            <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                        </div>
                    </div> 
                    <div className='d-flex'>
                        <input className='btn btn-primary' type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;