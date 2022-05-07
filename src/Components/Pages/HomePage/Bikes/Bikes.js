import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useBikes from '../../../hooks/useBikes';
import Bike from '../Bike/Bike';

import './Bikes.css';

const Bikes = () => {
    // const [bikes, setBikes] = useState([]);
    // useEffect(() => {
    //     const url = `http://localhost:5000/inventory`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setBikes(data))
    // }, []);

    const [bikes, setBikes] = useBikes();

    // const filteredBikes = bikes.filter((bikes, index )=> index < 6);
    // console.log(filteredBikes);

    return (
        <div className='bikes-collection'>
            <h2 className='text-center'>Our Royal Bikes Collection.{bikes.length}</h2>

            <div className='bikes-container container'>
                {

                    bikes.map((bike, index) =>  (bike.length < 6, <Bike key={bike._id} bike={bike}></Bike>))
                }
            </div>
            <div className='link-container text-center'>
                <Link to='/manageinventories'>Manage Inventories</Link>

            </div>
        </div>
    );
};

export default Bikes;