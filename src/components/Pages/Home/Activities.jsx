import React from 'react';
import images from '../../../assets/images/Birthday.jpg'
import {HiCake} from 'react-icons/hi'
import { FaUsers } from 'react-icons/fa';
import { IoBalloonSharp } from "react-icons/io5";

const Activities = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto my-20">
      <div className="grid md:grid-cols-2 ">
        <div className="">
          <h1 className="text-5xl font-semibold">The Great Way to</h1>
          <h1 className="text-5xl font-semibold">Celebrate a Birthday</h1>
          <p className="my-10 text-lg md:w-10/12">
            Want to make a special gift to your child? Looking for a place to
            let the kids do whatever they want, but do no want to worry every
            minute? We are happy to help and offer our Birthday Party programs!
          </p>
          <div className="grid grid-cols-3 justify-center items-center">
            <div className="w-1/2">
              <HiCake className="text-7xl mx-auto" />
              <p className="text-center">Customized for You!</p>
            </div>
            <div className="w-7/12">
              <FaUsers className="text-7xl mx-auto" />
              <p className="text-center">In a 100% Private Space</p>
            </div>
            <div className="w-1/2">
              <IoBalloonSharp className="text-7xl mx-auto" />
              <p className="text-center">Easy, Fast, Fun</p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src={images}
            alt="Birthday images"
            draggable="false"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Activities;