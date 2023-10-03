import React, { useEffect } from "react";
import { FaDribbble } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { SiYoutubemusic } from "react-icons/si";
import HomeActivities from "../../utility/HomeActivities";
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";

const Activities = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-20">
      <div className="grid md:grid-cols-3 gap-7">
        <HomeActivities data-aos="fade-down" icon={<FaDribbble />} title={"SPORTS GAMES"} />
        <HomeActivities data-aos="fade-down" icon={<SiYoutubemusic />} title={"MUSIC & ART"} />
        <HomeActivities data-aos="fade-down" icon={<GrLanguage />} title={"LANGUAGE LESSONS"} />
      </div>
    </div>
  );
};

export default Activities;
