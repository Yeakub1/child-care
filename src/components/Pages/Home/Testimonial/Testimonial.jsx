import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import image1 from '../../../../assets/images/page banner.png'

const Testimonial = () => {
  return (
    <div className="bg-[#1F2B40] text-white py-20 mt-16">
      <div className="max-w-screen-xl px-5 mx-auto">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          // slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex gap-4 shadow-2xl py-5">
              <div className="">
                <img className="h-16 w-16 rounded-full" src={image1} alt="" />
              </div>
              <div className="w-[70%]">
                <p>
                  Since my son went to school in Padora, my son was able to
                  discover his hidden talents.
                </p>
                <div className="mt-5">
                  <h1 className="text-xl font-bold">Maradhita</h1>
                  <p className="uppercase text-slate-400">Parent</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-4 shadow-2xl py-5">
              <div className="">
                <img className="h-16 w-16 rounded-full" src={image1} alt="" />
              </div>
              <div className="w-[70%]">
                <p>
                  Since my son went to school in Padora, my son was able to
                  discover his hidden talents.
                </p>
                <div className="mt-5">
                  <h1 className="text-xl font-bold">Maradhita</h1>
                  <p className="uppercase text-slate-400">Parent</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-4 shadow-2xl py-5">
              <div className="">
                <img className="h-16 w-16 rounded-full" src={image1} alt="" />
              </div>
              <div className="w-[70%]">
                <p>
                  Since my son went to school in Padora, my son was able to
                  discover his hidden talents.
                </p>
                <div className="mt-5">
                  <h1 className="text-xl font-bold">Maradhita</h1>
                  <p className="uppercase text-slate-400">Parent</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-4 shadow-2xl py-5">
              <div className="">
                <img className="h-16 w-16 rounded-full" src={image1} alt="" />
              </div>
              <div className="w-[70%]">
                <p>
                  Since my son went to school in Padora, my son was able to
                  discover his hidden talents.
                </p>
                <div className="mt-5">
                  <h1 className="text-xl font-bold">Maradhita</h1>
                  <p className="uppercase text-slate-400">Parent</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-4 shadow-2xl py-5">
              <div className="">
                <img className="h-16 w-16 rounded-full" src={image1} alt="" />
              </div>
              <div className="w-[70%]">
                <p>
                  Since my son went to school in Padora, my son was able to
                  discover his hidden talents.
                </p>
                <div className="mt-5">
                  <h1 className="text-xl font-bold">Maradhita</h1>
                  <p className="uppercase text-slate-400">Parent</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-4 shadow-2xl py-5">
              <div className="">
                <img className="h-16 w-16 rounded-full" src={image1} alt="" />
              </div>
              <div className="w-[70%]">
                <p>
                  Since my son went to school in Padora, my son was able to
                  discover his hidden talents.
                </p>
                <div className="mt-5">
                  <h1 className="text-xl font-bold">Maradhita</h1>
                  <p className="uppercase text-slate-400">Parent</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
