import React from "react";
import image from "../../../assets/images/about.webp";
import { useLocation } from "react-router-dom";
import UseScrollTop from "../../Shared/UseScrollTop";

const ConceptChildren = () => {
  const { pathname } = useLocation();
  UseScrollTop(pathname);
  return (
    <div className="max-w-screen-xl mx-auto px-5 mt-12">
      <div className="grid md:grid-cols-2 justify-between ">
        <div className="">
          <h1 className="text-3xl font-semibold">
            New Concept In Children’s Play
          </h1>
          <p className="text-lg my-5 text-justify">
            Interactive Learning Playgrounds are vibrant hubs where play meets
            education. Imagine a colorful, engaging space filled with
            interactive digital screens, augmented reality games, and hands-on
            activities. These playgrounds harness cutting-edge technology to
            create an environment where children can explore, create, and learn
            in exciting new ways.
          </p>
          <div className="banner text-white p-10 rounded-md">
            <div className="mt-5">
              <h1 className="text-xl mb-6">
                <span className=" ab-icon px-4 bg-white text-black rounded-full p-2 mr-5">
                  1
                </span>
                <span className="font-bold"> 500</span> new items in the toy
                collection
              </h1>
              <hr className="text-white " />
            </div>
            <div className="mt-7">
              <h1 className="text-xl mb-6">
                <span className=" ab-icon px-4 bg-white text-black rounded-full p-2 mr-5">
                  2
                </span>
                Throwing birthday parties is
                <span className="font-bold"> fun and easy</span>
              </h1>
              <hr className="text-white " />
            </div>
            <div className="mt-7">
              <h1 className="text-xl mb-6">
                <span className=" ab-icon px-4 bg-white text-black rounded-full p-2 mr-5">
                  3
                </span>
                Multiple <span className="font-bold"> benefits</span> from
                buying a membership
              </h1>
              <hr className="text-white " />
            </div>
            <div className="mt-7">
              <h1 className="text-xl mb-6">
                <span className=" ab-icon px-4 bg-white text-black rounded-full p-2 mr-5">
                  4
                </span>
                Fresh snacks and beverages
                <span className="font-bold"> for everyone</span>
              </h1>
              <hr className="text-white " />
            </div>
            <div className="mt-7">
              <h1 className="text-xl mb-3">
                <span className=" ab-icon px-4 bg-white text-black rounded-full p-2 mr-5">
                  5
                </span>
                <span className="font-bold"> Over 1000</span>
                visitors for the last year
              </h1>
            </div>
          </div>
        </div>
        <div className="md:mt-0 mt-10">
          <img
            className="md:float-right md:w-auto w-full rounded-md"
            src={image}
            draggable="false"
            alt="images"
          />
        </div>
      </div>
    </div>
  );
};

export default ConceptChildren;
