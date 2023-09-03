import React, { useEffect } from 'react';
import kids from '../../../../assets/images/Kids2.png';
import { FaUtensils, FaRegClock, FaLanguage, FaUsers, FaAward, FaBusAlt } from "react-icons/fa";
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
          <h1 className="text-center font-bold text-4xl mb-5">
            We Gave The Best For <br /> Your Child
          </h1>
          <div className="grid md:grid-cols-3 gap-3 justify-between items-center">
            <div className="">
              <div className="ml-12 flex items-center gap-5" data-aos="fade-up">
                <div className="text-4xl bg-[#D07DD2] rounded-full p-5 text-white">
                  <FaUtensils />
                </div>
                <div className="">
                  <h1 className="text-xl font-bold">Healthy Food</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    elit tellus.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-7" data-aos="fade-up">
                <div className="text-4xl bg-[#A1DBE6] rounded-full p-5 text-white">
                  <FaRegClock />
                </div>
                <div className="">
                  <h1 className="text-xl font-bold">Full Day Session</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    elit tellus.
                  </p>
                </div>
              </div>
              <div
                className="ml-12 flex items-center gap-5 mt-7"
                data-aos="fade-up"
              >
                <div className="text-4xl bg-[#FFB74B] rounded-full p-5 text-white">
                  <FaLanguage />
                </div>
                <div className="">
                  <h1 className="text-xl font-bold">Language Lessons</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    elit tellus.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <img src={kids} alt="kids" />
            </div>
            <div className="text-right">
              <div className="mr-12 flex items-center gap-5" data-aos="fade-up">
                <div className="">
                  <h1 className="text-xl font-bold">Qualified Teachers</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    elit tellus.
                  </p>
                </div>
                <div className="text-4xl bg-[#8373CE] rounded-full p-5 text-white">
                  <FaUsers />
                </div>
              </div>
              <div className="flex items-center gap-5 mt-7" data-aos="fade-up">
                <div className="">
                  <h1 className="text-xl font-bold">Special Education</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    elit tellus.
                  </p>
                </div>
                <div className="text-4xl bg-[#FC5B4E] rounded-full p-5 text-white">
                  <FaAward />
                </div>
              </div>
              <div
                className="mr-12 flex items-center gap-5 mt-7"
                data-aos="fade-up"
              >
                <div className="">
                  <h1 className="text-xl font-bold">Transport</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    elit tellus.
                  </p>
                </div>
                <div className="text-4xl bg-[#ADCB69] rounded-full p-5 text-white">
                  <FaBusAlt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Care;