import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bike.css';

const Bike = ({ bike }) => {
    const { _id, name, image, price, quantity, supplier, description } = bike;
    const navigate = useNavigate();

    const updateDetails = () => {

    }
    const navigateToBikeDetails = () => {
        navigate(`/inventory/${_id}`);
    }
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

            <div className='buttons'>
                {/* <p><button onClick={() => updateDetails(_id)}>Update</button> </p> */}
                <p><button onClick={() => navigateToBikeDetails(_id)} className='border-0 rounded bg-primary fw-bold text-white p-1' >Update</button> </p>
            </div>
        </div>
    );
};

export default Bike;