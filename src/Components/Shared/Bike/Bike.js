import React from 'react';
import './Bike.css';

const Bike = ({bike}) => {
    const {id,name,image,price,quantity,supplier,description} = bike;
    return (
        <div className='bike-container'>

            <div className='bike-image'>
                <img src={image} alt="" />
            </div>

            <h3 className='text-center'>{name}</h3>
            <div className='bike-info'>
                <p>{price}</p>
                <p>{supplier}</p>
                <p>{quantity}</p>
            </div>
            <p className='m-3'>{description}</p>
        </div>
    );
};

export default Bike;