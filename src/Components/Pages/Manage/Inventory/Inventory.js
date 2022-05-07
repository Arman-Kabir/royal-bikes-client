import React from 'react';
import './Inventory.css';

const Inventory = ({ bike, handleInventoryItemDelete }) => {
    const { _id, name, image, price, quantity, supplier, description } = bike;

    
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

            <div className='inventory-item-delete center-all'>
                <button className='border-0 rounded bg-danger fw-bold text-white p-1' onClick={() => handleInventoryItemDelete(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default Inventory;