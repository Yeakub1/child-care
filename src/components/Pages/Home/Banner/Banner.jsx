import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/xDRZRkD/tutor-with-litthe-girl-studying-home.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              <h1>Welcome to</h1>
              <h1 className="text-[#fbb44d] mt-7">
                ABC Early Learning Daycare Center
              </h1>
            </h1>
            <p className="mt-2 text-xl mb-3">Smart Children For Smart Society</p>
            <p className="mb-5">
              Our Philosophy stands for our values and beliefs. ABC Early
              Learning Daycare Center is highly concerned about ensuring
              comfort, safety and security for our children. We focus on
              individual needs, interests and abilities with a view to implement
              student centric approach. At our center, all children are treated
              equally and with respect, regardless of race, religion, language,
              ability or gender.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
