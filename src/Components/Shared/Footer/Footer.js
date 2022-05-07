import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='container footer-box'>
                <div className='d-flex flex-column pt-5 justify-content-center align-items-center'>
                    <div>
                        <h3 className='text-info'>Mister-bd-gym</h3>
                        <p className='text-danger'>Best gym in the town</p>
                    </div>
                </div>
                <div className='pt-5 d-flex flex-column pt-5 justify-content-center align-items-center'>
                    <div>
                        <h3 className='text-info ps-5'>Directories</h3>
                        <ul>
                            <li><Link className='link' to='/'>Home</Link></li>
                            <li><Link className='link' to='/services'>Services</Link></li>
                            <li><Link className='link' to='/blogs'>Blogs</Link></li>
                            <li><Link className='link' to='/about'>About</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='d-flex flex-column pt-5'>
                    <h3 className='text-info text-center'>Subscribe to Our Newsletter</h3>
                    <input type="email" name="email" id="" />
                </div>

            </div>
        </div >
    );
};

export default Footer;