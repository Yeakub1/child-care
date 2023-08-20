import React, { useEffect } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";

const ServicePoint = ({ title }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-up">
      <h1 className="flex gap-2 -ml-1 mt-3 text-justify">
        <span className="text-xl ">
          <BsPatchCheckFill className="text-[#0788FF] " />
        </span>
        {title}
      </h1>
    </div>
  );
};

export default ServicePoint;
