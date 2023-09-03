import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import CountUps from "../CountUp/CountUp";
import Care from "../Care/Care";
import Testimonial from "../Testimonial/Testimonial";
import Activities from "../Activities/Activities";
import GoToTop from "../../../Shared/GoToTop/GoToTop";
import Loading from "../../../Shared/Loading/Loading";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      <Helmet>
        <title>Academy for Bright Children</title>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Banner />
          <Care />
          <Gallery />
          <CountUps />
          <Activities />
          <Testimonial />
          <GoToTop />
        </>
      )}
    </>
  );
};

export default Home;
