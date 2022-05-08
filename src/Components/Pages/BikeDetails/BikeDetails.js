import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './BikeDetails.css';

const BikeDetails = () => {
    const [bike, setBike] = useState([]);
    const { id } = useParams();
    const { _id, name, image, price, quantity, supplier, description } = bike;

    useEffect(() => {
        const url = `https://lit-tundra-62538.herokuapp.com/inventory/${id}`;
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
        const url = `https://lit-tundra-62538.herokuapp.com/inventory/${id}`;
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
    // Update restock
    const handleReStock = event => {
        event.preventDefault();
        const newQuantity = parseInt(event.target.restock.value) + parseInt(quantity);
        console.log(newQuantity);
        const updatedQuantity = { newQuantity };
        // console.log('restock item id', id);

        // send data to server
        const url = `https://lit-tundra-62538.herokuapp.com/inventory/${id}`;
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
                event.target.reset();
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

                <div className='d-flex justify-content-center m-3'>
                    <button className='border-0 bg-danger text-white fw-bold p-1 rounded' onClick={() => handleDelivered(_id)}>Delivered</button>
                </div>

                <form action="" className='d-flex justify-content-center' onSubmit={handleReStock}>

                    <span>Restock the Items</span>
                    <input type="number" name="restock" id="" />
                    {/* <button type="submit">ReStock</button> */}
                    <input type="submit" value="ReStock" />
                </form>
            </div>
            <div className='link-container text-center'>
                <Link to='/manage-inventories' className='text-decoration-none fw-bold fs-4 text-danger'>Manage Inventories</Link>

            </div>
        </div>
    );
};

export default BikeDetails;