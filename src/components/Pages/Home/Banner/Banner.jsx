import React from "react";
import { Link, useLocation } from "react-router-dom";
import image from '../../../../assets/images/hero-banner.jpg'
import UseScrollTop from "../../../Shared/UseScrollTop/UseScrollTop";

const Banner = () => {
  const { pathname } = useLocation();
  UseScrollTop(pathname);
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-12">
      <div className="grid md:grid-cols-2 gap-3 items-center">
        <div className="">
          <p className="text-2xl font-semibold text-[#ffdd40]">Best Choise</p>
          <h1 className="text-5xl font-bold mt-3">
            Make Your Children's Life Special
          </h1>
          <p className="text-xl mt-4">Smart Children For Smart Society</p>
          <p className="mt-4 text-justify">
            Our Philosophy stands for our values and beliefs. ABC Early Learning
            Daycare Center is highly concerned about ensuring comfort, safety
            and security for our children. We focus on individual needs,
            interests and abilities with a view to implement student centric
            approach. At our center, all children are treated equally and with
            respect, regardless of race, religion, language, ability or gender.
          </p>
          <Link to="contact">
            <button className="px-5 py-2 bg-[#1F2B40] text-white rounded-md mt-3 hover:bg-[#ffdd40] hover:text-black font-semibold">
              Contact us
            </button>
          </Link>
        </div>
        <div className="">
          <img
            className="rounded-md"
            src={image}
            alt="banner"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
