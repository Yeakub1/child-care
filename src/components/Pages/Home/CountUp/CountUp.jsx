import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaUserGraduate, FaUsers, FaBookReader } from "react-icons/fa";
import { MdSmartToy } from "react-icons/md";

const CountUps = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <div className="bg-[#1F2B40] py-20 mt-16">
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
    </div>
  );
};

export default CountUps;
