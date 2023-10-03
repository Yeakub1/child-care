import React from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import CountUps from "./CountUp";
import Care from "./Care";
import Testimonial from "./Testimonial";
import Activities from "./Activities";
import GoToTop from "../../Shared/GoToTop";
import { Helmet } from "react-helmet-async";
import WhoWeAre from "./WhoWeAre";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Academy for Bright Children</title>
      </Helmet>

      <>
        <Banner />
        <Care />
        <WhoWeAre />
        <CountUps />
        <Gallery />
        <Activities />
        <Testimonial />
        <GoToTop />
      </>
    </div>
  );
};

export default Home;
