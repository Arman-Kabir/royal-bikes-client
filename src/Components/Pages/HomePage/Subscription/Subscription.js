import React from 'react';
import './Subscription.css';

const Subscription = () => {
    const handleSubscription = event => {
        event.preventDefault();
    }
    return (
        <div className='container mt-5 subscription mb-5 py-5'>
            <h2 className='text-center text-info py-3'>Subscribe to our mail box</h2>
            <p className='text-center text-white'>We will notify you about our latest collections</p>

            <form action="" onSubmit={handleSubscription}>
                <input className='p-2 w-50 d-block mx-auto rounded border-1' type="email" name="email" />
                <input className='p-2 d-block mx-auto mt-1 border-0 bg-info text-white rounded fw-bold' type="submit" value="subscribe" />
            </form>
        </div>
    );
};

export default Subscription;