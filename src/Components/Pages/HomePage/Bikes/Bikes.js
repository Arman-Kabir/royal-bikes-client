import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useBikes from '../../../hooks/useBikes';
import Bike from '../Bike/Bike';

import './Bikes.css';

const Bikes = () => {
    const limitItem = 6;
    const [bikes, setBikes] = useBikes(limitItem);

    return (
        <div className='bikes-collection my-5'>
            <h2 className='text-center text-info'>Our Royal Bikes Collection.{bikes.length}</h2>

            <div className='bikes-container container mt-5'>
                {

                    bikes.map(bike => <Bike key={bike._id} bike={bike}></Bike>)
                }
            </div>
            <div className='link-container text-center my-5'>
                <Link to='/manage-inventories' className='text-decoration-none fw-bold fs-4 text-danger'>Manage Inventories</Link>

            </div>
        </div>
    );
};

export default Bikes;