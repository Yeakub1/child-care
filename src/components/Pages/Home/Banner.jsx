import React from "react";
import { Link, useLocation } from "react-router-dom";
import UseScrollTop from "../../Shared/UseScrollTop";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import hero from "../../../assets/images/animation_ln8qh033.json";
import LazyLoad from "react-lazy-load";

const Banner = () => {
  const { pathname } = useLocation();
  UseScrollTop(pathname);
  return (
    <div className="hero-image side-bar -mt-20">
      <div className="max-w-screen-xl px-5 mx-auto min-h-screen">
        <div className="grid md:grid-cols-2 gap-4 items-center justify-center pt-24">
          {/*text part */}
          <div className="w-full">
            <h1 className="text-3xl md:text-5xl font-bold">
              Make Your Children's Life Special
            </h1>
            <p className="py-5 md:h-36 font-Raleway tracking-wider md:text-lg md:mt-6 text-justify">
              <Typewriter
                words={[
                  "Our Philosophy stands for our values and beliefs. ABC Early Learning Daycare Center is highly concerned about ensuring comfort, safety and security for our children. We focus on individual needs, interests and abilities with a view to implement student centric approach. At our center, all children are treated equally and with respect, regardless of race, religion, language, ability or gender.",
                ]}
                typeSpeed={50}
              />
            </p>
            <Link to="contact">
              <button className="md:mt-24 button loading-container">
                Contact us
              </button>
            </Link>
          </div>
          {/* annimation */}
          <LazyLoad offset={300}>
            <Lottie className="md:w-full" animationData={hero} loop={true} />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default Banner;
