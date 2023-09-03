import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaUserGraduate, FaUsers, FaBookReader } from "react-icons/fa";
import { MdSmartToy } from "react-icons/md";

const CountUps = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <div className="count-up">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,160L48,133.3C96,107,192,53,288,64C384,75,480,149,576,202.7C672,256,768,288,864,282.7C960,277,1056,235,1152,192C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="max-w-screen-xl px-5 mx-auto ">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="text-center shadow-2xl px-10 py-8">
            <div className="flex items-center justify-center gap-5">
              <div className="text-white text-5xl">
                <FaUserGraduate />
              </div>
              <div className="">
                <h1 className="text-white font-bold text-3xl">Student</h1>
                <ScrollTrigger
                  className="text-3xl font-bold text-white"
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  {countOn && (
                    <CountUp start={0} end={1100} duration={8} delay={0} />
                  )}
                  +
                </ScrollTrigger>
              </div>
            </div>
          </div>

          <div className="text-center shadow-2xl px-10 py-8">
            <div className="flex items-center justify-center gap-5">
              <div className="text-white text-5xl">
                <FaUsers />
              </div>
              <div className="">
                <h1 className="text-white font-bold text-3xl">Teacher</h1>
                <ScrollTrigger
                  className="text-3xl font-bold text-white"
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  {countOn && (
                    <CountUp start={0} end={100} duration={8} delay={0} />
                  )}
                  +
                </ScrollTrigger>
              </div>
            </div>
          </div>

          <div className="text-center shadow-2xl px-10 py-8">
            <div className="flex items-center justify-center gap-5">
              <div className="text-white text-5xl">
                <FaBookReader />
              </div>
              <div className="">
                <h1 className="text-white font-bold text-3xl">Activities</h1>
                <ScrollTrigger
                  className="text-3xl font-bold text-white"
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  {countOn && (
                    <CountUp start={0} end={50} duration={8} delay={0} />
                  )}
                  +
                </ScrollTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,160L48,133.3C96,107,192,53,288,64C384,75,480,149,576,202.7C672,256,768,288,864,282.7C960,277,1056,235,1152,192C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default CountUps;
