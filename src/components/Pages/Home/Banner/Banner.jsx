// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import image from '../../../../assets/images/hero-banner.png'
// import UseScrollTop from "../../../Shared/UseScrollTop/UseScrollTop";

// const Banner = () => {
//   const { pathname } = useLocation();
//   UseScrollTop(pathname);
//   return (
//     <div className="max-w-screen-xl px-5 mx-auto mt-12">
//       <div className="grid md:grid-cols-2 gap-3 items-center">
//         <div className="">
//           <p className="text-2xl font-semibold text-[#ffdd40]">Best Choise</p>
//           <h1 className="text-5xl font-bold mt-3">
//             Make Your Children's Life Special
//           </h1>
//           <p className="text-xl mt-4">Smart Children For Smart Society</p>
//           <p className="mt-4 text-justify">
//             Our Philosophy stands for our values and beliefs. ABC Early Learning
//             Daycare Center is highly concerned about ensuring comfort, safety
//             and security for our children. We focus on individual needs,
//             interests and abilities with a view to implement student centric
//             approach. At our center, all children are treated equally and with
//             respect, regardless of race, religion, language, ability or gender.
//           </p>
//           <Link to="contact">
//             <button className="px-5 py-2 bg-[#1F2B40] text-white rounded-md mt-3 hover:bg-[#ffdd40] hover:text-black font-semibold">
//               Contact us
//             </button>
//           </Link>
//         </div>
//         <div className="">
//           <img
//             className="rounded-md"
//             src={image}
//             alt="banner"
//             draggable="false"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import "./Banner.css";
import banner1 from "../../../../assets/images/banner1.png";
import banner2 from "../../../../assets/images/banner2.png";
import banner3 from "../../../../assets/images/banner3.png";
import banner4 from "../../../../assets/images/banner4.png";
import banner5 from "../../../../assets/images/banner5.png";
import banner6 from "../../../../assets/images/banner6.png";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="banner side-bar text-white">
      <div className="max-w-screen-xl px-5 mx-auto min-h-screen ">
        <div className="grid md:grid-cols-2 gap-4 items-center justify-center pt-10">
          {/*text part */}
          <div className="items-center justify-center space-y-6 ">
            <div className="">
              <p className="text-2xl font-semibold text-[#ffdd40]">
                Best Choise
              </p>
              <h1 className="text-5xl font-bold mt-3">
                Make Your Children's Life Special
              </h1>
              <p className="text-xl mt-4">Smart Children For Smart Society</p>
              <p className="mt-4 text-justify mb-5">
                Our Philosophy stands for our values and beliefs. ABC Early
                Learning Daycare Center is highly concerned about ensuring
                comfort, safety and security for our children. We focus on
                individual needs, interests and abilities with a view to
                implement student centric approach. At our center, all children
                are treated equally and with respect, regardless of race,
                religion, language, ability or gender.
              </p>
              <Link to="contact">
                <button className="banner-button">Contact us</button>
              </Link>
            </div>
          </div>

          {/* image part */}
          <div className="block ">
            <div className=" banner-imgs">
              <div className="banner-1 shape-1">
                <img src={banner1} alt="" />
              </div>
              <div className="banner-2 shape-2">
                <img src={banner2} alt="" />
              </div>
              <div className="banner-3 shape-3">
                <img src={banner3} alt="" />
              </div>
              <div className="banner-4 shape-3">
                <img src={banner4} alt="" />
              </div>
              <div className="banner-5 shape-2">
                <img src={banner5} alt="" />
              </div>
              <div className="banner-6 shape-2">
                <img src={banner6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="waves-section md:mt-0 mt-24">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
        <div className="wave wave-4"></div>
      </div>
    </div>
  );
};

export default Banner;


