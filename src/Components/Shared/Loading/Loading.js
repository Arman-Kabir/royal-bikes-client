import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height:'300px'}}>
            <Spinner animation="grow" variant="info" />
            <Spinner animation="border" variant="dark" />
        </div>
    );
};

export default Loading;