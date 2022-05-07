import React from 'react';
import './ManageInventory.css';
import { Link } from 'react-router-dom';
import useBikes from '../../../hooks/useBikes';
import Inventory from '../Inventory/Inventory';

const ManageInventory = () => {
    const [bikes, setBikes] = useBikes([]);

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

            <div className='inventory-container container mt-5'>
                {
                    bikes.map(bike => <Inventory key={bike._id} bike={bike}
                        handleInventoryItemDelete={handleInventoryItemDelete}
                    ></Inventory>)
                }
            </div>

            <div className='link-container text-center mt-5 mb-5'>
                <Link to='/manageinventories'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default ManageInventory;