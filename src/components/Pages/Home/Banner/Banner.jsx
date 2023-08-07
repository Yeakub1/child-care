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
              <h1 className="text-[#fbb44d] mt-7">Academy for Bright Children</h1>
            </h1>
            <p className="mb-5">
              Fusce pretium, est at aliquam semper, leo ante facilisis risus in
              feugiat ipsum augue pellent esque metu at luctus metus, non ornare
              lectus ac ipsum convallis fermentum ante a suscipit nunc. Etiam
              non scelerisque loren ornare dapibus libero sit amet facil sodales
              rutrum .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
