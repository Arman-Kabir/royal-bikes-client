import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='container footer-box'>
                <div className='d-flex flex-column pt-5 justify-content-center align-items-center'>
                    <div>
                        <h3 className='text-info'>Royal-Bikes</h3>
                        <p className='text-danger'>Best bikes Collection</p>
                    </div>
                </div>
                <div className='pt-5 d-flex flex-column pt-5 justify-content-center align-items-center'>
                    <div>
                        <h3 className='text-info ps-5'>Directories</h3>
                        <ul>
                            <li><Link className='link' to='/'>Home</Link></li>
                            <li><Link className='link' to='/blogs'>Blogs</Link></li>
                            <li><Link className='link' to=''>Manage Inventories</Link></li>
                            <li><Link className='link' to=''>My Items</Link></li>
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