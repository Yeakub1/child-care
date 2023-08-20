import React, { useEffect } from "react";
import { FaDribbble } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { SiYoutubemusic } from "react-icons/si";
import HomeActivities from "../../../utility/HomeActivities";
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";

const Activities = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-20">
      <div
        className="grid md:grid-cols-3 gap-7"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <HomeActivities
          icon={<FaDribbble />}
          title={"SPORTS GAMES"}
          description={
            "Dynamic activities & games are guaranteed to burn energy, increase fitness, and improve gross motor skills."
          }
        />
        <HomeActivities
          icon={<GrLanguage />}
          title={"LANGUAGE LESSONS"}
          description={
            "Dynamic activities & games are guaranteed to burn energy, increase fitness, and improve gross motor skills."
          }
        />
        <HomeActivities
          icon={<SiYoutubemusic />}
          title={"MUSIC & ART"}
          description={
            "Dynamic activities & games are guaranteed to burn energy, increase fitness, and improve gross motor skills."
          }
        />
      </div>
    </div>
  );
};

export default Activities;
