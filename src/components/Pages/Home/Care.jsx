import React, { useEffect } from "react";
import {
  FaUtensils,
  FaRegClock,
  FaLanguage,
  FaUsers,
  FaAward,
  FaBusAlt,
  FaDribbble,
} from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";


const Care = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-16">
      <div className="max-w-screen-xl px-5 mx-auto p-10">
        <h1 className="text-center font-bold text-3xl mb-10">
          We Gave The Best For Your Child
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-10 justify-center">
          <div className=" flex items-center gap-5" data-aos="fade-up">
            <div className="text-2xl App-logo bg-[#D07DD2] rounded-full p-5 text-white">
              <FaUtensils />
            </div>
            <h1 className="text-xl font-bold">Healthy Food</h1>
          </div>

          <div className="flex items-center gap-5" data-aos="fade-up">
            <div className="text-2xl App-logo bg-[#A1DBE6] rounded-full p-5 text-white">
              <FaRegClock />
            </div>
            <h1 className="text-xl font-bold">Full Day Session</h1>
          </div>

          <div className=" flex items-center gap-5" data-aos="fade-up">
            <div className="text-2xl App-logo bg-[#FFB74B] rounded-full p-5 text-white">
              <FaLanguage />
            </div>
            <h1 className="text-xl font-bold">Language Lessons</h1>
          </div>

          <div className="flex items-center gap-5" data-aos="fade-up">
            <div className="text-2xl App-logo bg-[#8373CE] rounded-full p-5 text-white">
              <FaUsers />
            </div>
            <h1 className="text-xl font-bold">Qualified Teachers</h1>
          </div>

          <div className="flex items-center gap-5" data-aos="fade-up">
            <div className="text-2xl App-logo bg-[#FC5B4E] rounded-full p-5 text-white">
              <FaAward />
            </div>
            <h1 className="text-xl font-bold">Special Education</h1>
          </div>

          <div className="flex items-center gap-5" data-aos="fade-up">
            <div className="text-2xl App-logo bg-[#ADCB69] rounded-full p-5 text-white">
              <FaBusAlt />
            </div>
            <h1 className="text-xl font-bold">Transport</h1>
          </div>

          <div className="flex items-center gap-5" data-aos="fade-up">
            <div className="text-2xl App-logo banner rounded-full p-5 text-white">
              <FaDribbble />
            </div>
            <h1 className="text-xl font-bold">Sports games</h1>
          </div>

          <div className="flex items-center gap-5" data-aos="fade-up">
            <div className="text-2xl App-logo bg-[#02B890] rounded-full p-5 text-white">
              <SiYoutubemusic />
            </div>
            <h1 className="text-xl font-bold">Music & art</h1>
          </div>

          <div className="flex items-center gap-5" data-aos="fade-up">
            <div className="text-2xl App-logo bg-[#42238C] rounded-full p-5 text-white">
              <SiYoutubemusic />
            </div>
            <h1 className="text-xl font-bold">Meals Provided</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;