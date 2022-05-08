import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className=' conatct-container container py-5'>
            <h2 className='text-center text-info'>Our Contact Information</h2>
            <div className=' contact'>
                <div>

                </div>

                <div className='mt-3'>
                    <p className='text-white'>Company Name: <span className='fw-bold'>Royal-Bikes</span> </p>
                    <p className='text-white'>Company Email : <span className='fw-bold'>royalbikes1239@gmail.com</span></p>
                    <p className='text-white'>Phone: <span className='fw-bold'>01888-99999</span> </p>
                    <p className='text-white'>Address:  <span className='fw-bold'>Aftabnagar,Dhaka,Bangladesh</span></p>
                    <p className='text-white'>House:  <span className='fw-bold'>Block:B,Road:02,Flat:6A</span></p>
                    <p className='text-white'>Office-Open: <span className='fw-bold'> Saturday-Friday 9am-9pm</span></p>
                    <p className='fw-bold text-warning'>Please visit our office and have a coffee</p>
                </div>

                <div></div>
            </div>
        </div>
    );
};

export default Contact;