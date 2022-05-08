import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ bike, handleItemDelete }) => {
    console.log(bike);
    const { _id,name, image, price, quantity, supplier, description } = bike;
    const navigate = useNavigate();

    const navigateToBikeDetails = () => {
        navigate(`/inventoryitem/${_id}`);
    }


    return (
        <div className='inventory-item-container'>

            <div className='inventory-item-image center-all'>
                <img src={image} alt="" />
            </div>

            <div className='inventory-item-info center-all flex-column'>
                <h3>{name}</h3>
                <p>{description.slice(0, 150)}</p>
            </div>

            <div className='inventory-item-details center all pt-4'>
                <p><span className='fw-bold text-warning'>Price:</span> {price}</p>
                <p><span className='fw-bold text-warning'>Supplier:</span> {supplier}</p>
                <p><span className='fw-bold text-warning'>Quantity:</span> {quantity}</p>
            </div>

            <div className='inventory-item-buttons center-all'>
                <div>
                    <p><button onClick={() => navigateToBikeDetails(_id)} className='border-0 rounded bg-primary fw-bold text-white p-1' >Update</button> </p>
                    <button className='border-0 rounded bg-danger fw-bold text-white p-1 pe-2' onClick={() => handleItemDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Item;