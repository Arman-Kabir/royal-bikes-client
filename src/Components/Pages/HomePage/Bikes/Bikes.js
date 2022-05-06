import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';

import './Bikes.css';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/inventory`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])

    return (
        <div className='bikes-collection'>
            <h2 className='text-center'>Our Royal Bikes Collection.{bikes.length}</h2>

            <div className='bikes-container container'>
                {
                    bikes.map(bike => <Bike
                        key={bike._id}
                        bike={bike}
                    ></Bike>)
                }
            </div>
        </div>
    );
};

export default Bikes;