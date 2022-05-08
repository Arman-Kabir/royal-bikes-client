import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center text-danger fw-bold'>The page u r looking is not found</h1>
            <p className='text-center fw-bold'><Link to='/'>Go ot Home</Link></p>
        </div>
    );
};

export default NotFound;