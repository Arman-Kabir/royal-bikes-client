import React, { useEffect, useState } from 'react';
import './ManageMyItems.css';
import { Link, useNavigate } from 'react-router-dom';
import useBikes from '../../../hooks/useBikes';
import Inventory from '../Inventory/Inventory';
import Item from '../Item/Item';


const ManageMyItems = () => {
    // const [bikes, setBikes] = useBikes([]);
    const [bikes, setBikes] = useState([]);
    console.log(bikes);

    useEffect(() => {
        const url = `http://localhost:5000/inventoryitem`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);

    const navigate = useNavigate();

    const handleAddInventoryNewItem = () => {
        console.log('add new item');
        navigate('/add-inventory-item');
    }
    const handleAddNewItem = () => {
        console.log('add new item');
        navigate('/add-my-item');
    }

    const handleItemDelete = id => {
        console.log('inventory item delete id', id);
        const proceed = window.confirm('are u sure you want to Delete');

        if (proceed) {
            console.log('deleting inventory item with id', id);
            const url = `http://localhost:5000/inventoryitem/${id}`;
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
            <div className='add-item-buttons d-flex justify-content-center'>
                <p className='text-center me-3'><button className='border-0 bg-danger text-white rounded fw-bold'
                    onClick={handleAddInventoryNewItem}>Add Inventory New Item</button></p>
                <p className='text-center'><button className='border-0 bg-danger text-white rounded fw-bold'
                    onClick={handleAddNewItem}>Add New Item</button></p>
            </div>

            <div className='inventory-container container mt-5'>
                {
                    bikes.map(bike => <Item key={bike._id} bike={bike}
                        handleItemDelete={handleItemDelete}></Item>)
                }
            </div>
        </div>
    );
};

export default ManageMyItems;