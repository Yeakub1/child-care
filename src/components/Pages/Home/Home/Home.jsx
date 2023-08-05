import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import CountUps from '../CountUp/CountUp';
import Care from '../Care/Care';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Care/>
            <Gallery />
            <CountUps />
            <Testimonial/>
        </div>
    );
};

export default Home;