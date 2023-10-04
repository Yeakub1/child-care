import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaUserGraduate, FaUsers, FaBookReader } from "react-icons/fa";

const CountUps = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <div className="">
      <div className="max-w-screen-xl px-5 mx-auto my-20 py-20">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="text-center shadow-xl px-10 py-8 border hover:border-blue-700 hover:scale-105 duration-500 rounded-md">
            <div className="flex items-center justify-center gap-5">
              <div className=" text-5xl">
                <FaUserGraduate />
              </div>
              <div className="">
                <h1 className=" font-bold text-3xl">Student</h1>
                <ScrollTrigger
                  className="text-3xl font-bold "
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  {countOn && (
                    <CountUp start={0} end={950} duration={5} delay={0} />
                  )}
                  +
                </ScrollTrigger>
              </div>
            </div>
          </div>

          <div className="text-center shadow-xl px-10 py-8 border hover:border-blue-700 hover:scale-105 duration-500 rounded-md">
            <div className="flex items-center justify-center gap-5">
              <div className=" text-5xl">
                <FaUsers />
              </div>
              <div className="">
                <h1 className=" font-bold text-3xl">Teacher</h1>
                <ScrollTrigger
                  className="text-3xl font-bold "
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  {countOn && (
                    <CountUp start={0} end={30} duration={5} delay={0} />
                  )}
                  +
                </ScrollTrigger>
              </div>
            </div>
          </div>

          <div className="text-center shadow-xl px-10 py-8 border hover:border-blue-700 hover:scale-105 duration-500 rounded-md">
            <div className="flex items-center justify-center gap-5">
              <div className=" text-5xl">
                <FaBookReader />
              </div>
              <div className="">
                <h1 className=" font-bold text-3xl">Activities</h1>
                <ScrollTrigger
                  className="text-3xl font-bold "
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  {countOn && (
                    <CountUp start={0} end={23} duration={5} delay={0} />
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
