import React from 'react';
import './Banner.css';
import ninjah2r from '../../../../Images/banner/ninjah2r.jpg';

const Banner = () => {
    return (
        <div className='banner-container container'>
            <div className='banner-image'>
                <img src={ninjah2r} alt="" />
            </div>
            <div className='banner-info'>
                <h2>Own a Royal Bike</h2>
                <h3>Lead a Royal Lifestyle</h3>
                <p>Bikes are one of the essential parts of our day to day life. Everybody want to keep a bike that suits him most and express his royalty. We have the best royal bikes found at this planet in our collection. Come and claim yours</p>
            </div>
        </div>
    );
};

export default Banner;