import React from 'react';
import './ManageInventories.css';
import { Link, useNavigate } from 'react-router-dom';
import useBikes from '../../../hooks/useBikes';
import Inventory from '../Inventory/Inventory';

const ManageInventory = () => {
    const [bikes, setBikes] = useBikes([]);
    const navigate = useNavigate();

    const handleAddNewItem = () => {
        console.log('add new item');
        navigate('/add-inventory-item');
    }

    const handleInventoryItemDelete = id => {
        console.log('inventory item delete id', id);
        const proceed = window.confirm('are u sure you want to Delete');

        if (proceed) {
            console.log('deleting inventory item with id', id);
            const url = `http://localhost:5000/inventory/${id}`;
            console.log(url);

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        console.log(data);
                        const remaining = bikes.filter(b => b._id !== id);
                        setBikes(remaining);
                    }

                })
        }

    }


    return (
        <div>
            <h2 className='text-center mt-3'>All Royal Bikes: {bikes.length}</h2>
            <p className='text-center'><button className='border-0 bg-danger text-white rounded fw-bold'
                onClick={handleAddNewItem}>Add New Item</button></p>

            <div className='inventory-container container mt-5'>
                {
                    bikes.map(bike => <Inventory key={bike._id} bike={bike}
                        handleInventoryItemDelete={handleInventoryItemDelete}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;