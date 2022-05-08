import React from 'react';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import Contact from '../Contact/Contact';
import Subscription from '../Subscription/Subscription';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Bikes></Bikes>
        <Contact></Contact>
        <Subscription></Subscription>
        </>
    );
};

export default Home;