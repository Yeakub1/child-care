import React from 'react';
import { FaDribbble } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { SiYoutubemusic } from "react-icons/si";

const Activities = () => {
    return (
      <div className="max-w-screen-xl px-5 mx-auto mt-20">
        <div className="grid md:grid-cols-3 gap-7">
          <div className="text-center">
            <div className="flex justify-center text-7xl ">
              <FaDribbble className="App-logo text-[#1F2B40]" />
            </div>
            <h1 className="text-3xl font-semibold mt-5">SPORTS GAMES</h1>
            <p className="text-lg mt-5">
              Dynamic activities & games are guaranteed to burn energy, increase
              fitness, and improve gross motor skills.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center text-7xl ">
              <GrLanguage className="App-logo text-[#1F2B40]" />
            </div>
            <h1 className="text-3xl font-semibold mt-5">LANGUAGE LESSONS</h1>
            <p className="text-lg mt-5">
              Dynamic activities & games are guaranteed to burn energy, increase
              fitness, and improve gross motor skills.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center text-7xl ">
              <SiYoutubemusic className="App-logo text-[#1F2B40]" />
            </div>
            <h1 className="text-3xl font-semibold mt-5">MUSIC & ART</h1>
            <p className="text-lg mt-5">
              Dynamic activities & games are guaranteed to burn energy, increase
              fitness, and improve gross motor skills.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Activities;