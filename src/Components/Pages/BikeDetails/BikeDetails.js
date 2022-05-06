import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BikeDetails.css';

const BikeDetails = () => {
    const [bike, setBike] = useState([]);
    const { id } = useParams();
    const { _id, name, image, price, quantity, supplier, description } = bike;

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBike(data))
    }, [quantity]);

    // Update Delivered
    const handleDelivered = id => {
        console.log('delivered button clicked. Id:', id);
        const newQuantity = quantity - 1;
        const updatedQuantity = { newQuantity };

        // send data to server
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                setBike({ _id, name, image, price, newQuantity, supplier, description });
                alert('quantity updated successfully');
            })
    }


    return (
        <div className='bike-details-container container'>

            <div className='bike-details-image'>
                <img src={image} alt="" />
            </div>

            <div className='bike-details-info'>
                <h3 className='text-primary'>{name}</h3>

                <div className='bike-details-details'>
                    <p><span className='fw-bold text-warning'>Price:</span> {price}</p>
                    <p><span className='fw-bold text-warning'>Supplier:</span> {supplier}</p>
                    <p><span className='fw-bold text-warning'>Quantity:</span> {quantity}</p>
                </div>
                <p className='text-center fw-bold text-danger mt-2'>Bikes Description</p>
                <p className='m-0'>{description}</p>

                <div className='d-flex justify-content-center mt-2'>
                    <button className='border-0 bg-danger text-white fw-bold p-1 rounded' onClick={() => handleDelivered(_id)}>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default BikeDetails;