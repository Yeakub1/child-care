import React from 'react';
import { MdEmail, MdCall } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { GiAlarmClock } from "react-icons/gi";

const ContactInfo = () => {
    return (
      <div className="max-w-screen-xl rounded-xl px-5 mx-auto my-10 bg-[#02B890] text-white p-10">
        <div className="grid md:grid-cols-4 justify-evenly">
          <div className="text-center">
            <div className="md:border-r-white md:border-r-2 mt-10 md:mt-0">
              <button className="banner rounded-full p-5 text-3xl text-white ">
                <LuMapPin />
              </button>
              <div>
                <h1 className="text-2xl font-semibold mt-2">Address</h1>
                <p>Road 1, Block B, Niketon.</p>
                <p>Dhaka- 1212, Bangladesh.</p>
              </div>
            </div>
          </div>
          <div className="text-center md:border-r-white md:border-r-2 mt-10 md:mt-0">
            <div className="">
              <button className="banner rounded-full p-5 text-3xl text-white ">
                <MdEmail />
              </button>
              <div>
                <h1 className="text-2xl font-semibold mt-2">Email</h1>
                <h1 className="">director@abcdaycarebd.com</h1>
              </div>
            </div>
          </div>
          <div className="text-center md:border-r-white md:border-r-2 mt-10 md:mt-0">
            <div className="">
              <button className="banner rounded-full p-5 text-3xl text-white ">
                <MdCall />
              </button>
              <div>
                <h1 className="text-2xl font-semibold mt-2">Phone</h1>
                <h1 className="">+88 01739 588 788</h1>
              </div>
            </div>
          </div>

          <div className="text-center mt-10 md:mt-0">
            <div className="">
              <button className="banner rounded-full p-5 text-3xl text-white ">
                <GiAlarmClock />
              </button>
              <div>
                <h1 className="text-2xl font-semibold mt-2">Our Office Hour</h1>
                <p>Sunday - Monday</p>
                <p>7:00 am - 5:30 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactInfo;