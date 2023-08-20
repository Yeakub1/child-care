import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import UseScrollTop from "../../Shared/UseScrollTop/UseScrollTop";
import GoToTop from "../../Shared/GoToTop/GoToTop";

const Contact = () => {

  const { pathname } = useLocation();
  UseScrollTop(pathname);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
      <div className="bg-slate-200">
        <div className="max-w-screen-xl px-5 mx-auto pt-5 pb-10">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body contact-form">
              <div className="grid lg:grid-cols-2 gap-10">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Name</span>
                  </label>

                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                  />
                  {errors.name && (
                    <span className="text-red-800">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Phone</span>
                  </label>

                  <input
                    type="number"
                    {...register("phone", { required: true })}
                    placeholder="Your Phone Number"
                    className="input input-bordered w-full"
                  />
                  {errors.phone && (
                    <span className="text-red-800">phone is required</span>
                  )}
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>

                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered w-full"
                />
                {errors.email && (
                  <span className="text-red-800">Email is required</span>
                )}
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text text-black">Message</span>
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows="8"
                  placeholder="Message"
                  className="rounded-md px-3 w-full"
                ></textarea>
                {errors.message && (
                  <span className="text-red-800">Message is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#1F2B40] text-white hover:bg-[#1a7c85]"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
        <GoToTop/>
      </div>
    );
};

export default Contact;
