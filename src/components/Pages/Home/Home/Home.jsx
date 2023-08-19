import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import CountUps from '../CountUp/CountUp';
import Care from '../Care/Care';
import Testimonial from '../Testimonial/Testimonial';
import Activities from '../Activities/Activities';
import GoToTop from '../../../Shared/GoToTop/GoToTop';

const Home = () => {
    return (
        <div>
            <Banner />
            <Care/>
            <Gallery />
            <CountUps />
            <Activities/>
            <Testimonial />
            <GoToTop/>
        </div>
    );
};

export default Home;