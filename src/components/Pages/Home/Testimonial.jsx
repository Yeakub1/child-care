import React, { useState } from "react";
import { useEffect } from "react";
import ReactCardCarousel from "react-card-carousel";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { Rating, StickerStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  const CONTAINER_STYLE = {
    position: "relative",
    height: "60vh",
    width: "100%",
    display: "flex",
    padding: "60px",
    flex: 1,
    justifyContent: "center",
    alignItems: "middle",
  };

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const myStyles = {
    itemShapes: StickerStar,
    activeFillColor: "#F5C60D",
    inactiveFillColor: "#6C6962",
  };

  return (
    <div className="mt-20">
      <div>
        <div style={CONTAINER_STYLE}>
          <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
            {reviews.map((review) => (
              <div
                key={review._id}
                className="card w-60 md:w-[700px] bg-white shadow-xl "
              >
                <h2 className="text-4xl md:text-7xl pl-8 pt-8 text-[#1BBF72]">
                  <BiSolidQuoteLeft />
                </h2>
                <div className="px-6 md:px-10 ">
                  <p className="text-xs md:text-base font-JosefinSans text-center h-24 md:h-24 ">
                    {review.feedback}
                  </p>
                </div>
                <div className=" border-t-2 border-t-[#1bbf7241] mt-6  md:mt-2"></div>
                <div className="px-6 md:px-10  my-6 flex justify-between items-center">
                  <div className="flex items-center gap-5 mb-2  md:mb-4">
                    <img
                      className="w-10 h-10 md:w-14 md:h-14 rounded-full"
                      src="https://i.ibb.co/kMd7qVq/images.jpg"
                      alt="parants images"
                      draggable='false'
                    />
                    <div>
                      <h1 className="text-sm font-bold mb-2">
                        {review.parents}
                      </h1>
                      <Rating
                        style={{ width: "90px" }}
                        value={Math.round(review.rating || 0)}
                        readOnly
                        itemStyles={myStyles}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ReactCardCarousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
