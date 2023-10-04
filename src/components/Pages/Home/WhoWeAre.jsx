import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/images/we-are.jpg";

const WhoWeAre = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-28 my-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* text */}
        <div className="">
          <p>Who We Are</p>
          <h1 className="text-3xl font-bold mt-3">Best Child Care Center</h1>
          <p className="mt-5 text-lg text-justify">
            Welcome to our ABC Early Learning Daycare Center we understand the
            importance of providing a nurturing and stimulating environment for
            your child. We are dedicated to fostering a safe and supportive
            space where children can learn, play, and grow.
          </p>
          <p className="mt-5 text-lg text-justify">
            We believe in the holistic development of every child. Our
            experienced and caring staff members are committed to providing a
            balanced blend of education, social interaction, and creative
            activities. We create a warm and loving atmosphere that encourages
            curiosity, exploration, and friendship.
          </p>
          <Link to="about">
            <button className="mt-5 button loading-container">Lern more</button>
          </Link>
        </div>
        <div className="">
          <img
            src={image}
            alt="images"
            draggable="false"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
