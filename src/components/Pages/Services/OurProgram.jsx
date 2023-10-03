import React from "react";
import { useLocation } from "react-router-dom";
import UseScrollTop from "../../Shared/UseScrollTop";
import ServiceCard from "../../utility/ServiceCard";

const OurProgram = () => {
  const { pathname } = useLocation();
  UseScrollTop(pathname);
  return (
    <div className="">
      <div className="max-w-screen-xl px-5 mx-auto pt-12 pb-12">
        <div className="">
          <p className="">Our Program</p>
          <div className="mt-7 md:flex">
            <div className="md:w-[40%]">
              <h1 className="text-4xl font-semibold">
                We Offer An Exclusive <br /> Program For Kids
              </h1>
            </div>
            <div className="md:w-[60%] md:mt-0 mt-9">
              <p>
                At ABC Early Learning Daycare Center, we take pride in
                introducing our exclusive Kids' Enrichment Program, a unique
                blend of education, creativity, and fun tailored for young
                learners. Designed to ignite curiosity and nurture talent, our
                program offers an unparalleled experience that goes beyond
                traditional learning.
              </p>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <ServiceCard
            title={"General Science"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            }
          />
          <ServiceCard
            title={"Music"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            }
          />
          <ServiceCard
            title={"Games"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            }
          />
          <ServiceCard
            title={"Entertainment"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            }
          />
          <ServiceCard
            title={"Arts"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            }
          />
          <ServiceCard
            title={"Sport"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default OurProgram;
