import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import CountUps from '../CountUp/CountUp';
import Care from '../Care/Care';

const Home = () => {
    return (
        <div>
            <Banner />
            <Care/>
            <Gallery />
            <CountUps/>
        </div>
    );
};

export default Home;