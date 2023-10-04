import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

const PhotoGallery = () => {
    return (
      <div className="max-w-screen-xl mx-auto px-5">
        <h1 className="text-3xl font-semibold text-center my-10">Our Photo Gallery</h1>
        <Gallery photos={photos} direction={"column"} />
      </div>
    );
};

export default PhotoGallery;