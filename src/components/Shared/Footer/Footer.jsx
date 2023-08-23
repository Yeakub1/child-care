import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-20">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="">
          <h1 className="text-2xl font-bold">
            ABC Early Learning Daycare Center
          </h1>
          <p className="mt-5 text-justify">
            We focus on individual needs, interests and abilities with a view to
            implement student centric approach. At our center, all children are
            treated equally and with respect, regardless of race, religion,
            language, ability or gender.
          </p>
        </div>
        <div className="md:text-center">
          <h1 className="text-xl font-bold">Quick Links</h1>
          <div className="mt-5">
            <h1>
              <Link to="/">Home</Link>
            </h1>
            <h1 className="mt-3">
              <Link to="about">About</Link>
            </h1>
            <h1 className="mt-3">
              <Link to="services">Services</Link>
            </h1>
            <h1 className="mt-3">
              <Link to="contact">Contact</Link>
            </h1>
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold">Get In Touch</h1>
          <div className="mt-5">
            <p>Road 1, Block B, Niketon. Dhaka- 1212, Bangladesh.</p>
            <p className="mt-3">director@abcdaycarebd.com</p>
            <p className="mt-3">+88 01739 588 788</p>
            <div className="flex items-center gap-5 mt-5 text-lg ">
              <a
                className="rounded-full p-2 bg-[#1F2B40] hover:bg-[#4267B2] text-white"
                href="https://www.facebook.com/abcdaycarebd"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                className="rounded-full p-2 bg-[#1F2B40] hover:bg-[#833AB4] text-white"
                href="https://twitter.com/abcdaycarebd"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                className="rounded-full p-2 bg-[#1F2B40] hover:bg-[#1DA1F2] text-white"
                href="https://twitter.com/abcdaycarebd"
                target="_blank"
              >
                <FaTwitter />
              </a>
              <a
                className="rounded-full p-2 bg-[#1F2B40] hover:bg-[#0e76a8] text-white"
                href="https://www.linkedin.com/abcdaycarebd/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                className="rounded-full p-2 bg-[#1F2B40] hover:bg-red-600 text-white"
                href="https://www.youtube.com/channel/UCSNSXsoNnwFkOBtirPPNNYg"
                target="_blank"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />
        <p className="text-center pb-8">
          Copyright &copy; 2023 - Academy for Bright Children
        </p>
      </div>
    </div>
  );
};

export default Footer;
