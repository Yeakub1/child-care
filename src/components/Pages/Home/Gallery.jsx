const images = [
  "https://i.ibb.co/qBCVPcw/cute-kid-playing-with-toys-home.jpg",
  "https://i.ibb.co/8dF16r1/pexels-cottonbro-studio-3661386.jpg",
  "https://i.ibb.co/XJ3CWGk/pexels-cottonbro-studio-3662666.jpg",
  "https://i.ibb.co/jGDNGLL/pexels-naomi-shi-1001914.jpg",
  "https://i.ibb.co/pL3FPG9/mother-with-daughter.jpg",
  "https://i.ibb.co/PmnwzmK/pexels-yan-krukau-8613137.jpg",
  "https://i.ibb.co/k0Rwsp4/pexels-yan-krukau-8612970.jpg",
];

import React from "react";
import LazyLoad from "react-lazy-load";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto">
      <h1 className="text-center font-bold md:text-4xl text-3xl mt-14 mb-12">
        Child Picture
      </h1>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {images.map((image, i) => (
            <LazyLoad offset={300}>
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block" }}
                alt="images"
              />
            </LazyLoad>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
