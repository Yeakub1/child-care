import React from "react";
import image from "../../../assets/images/services-1.jpg";
import ServicePoint from "../../utility/ServicePoint";

const Philosophy = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-20">
      <div className="grid md:grid-cols-2 gap-5 items-center">
        <div className="">
          <h1 className="text-4xl font-semibold">Philosophy</h1>
          <p className="mt-5 text-justify">
            Our Philosophy stands for our values and beliefs. ABC Early Learning
            Daycare Center is highly concerned about ensuring comfort, safety
            and security for our children. We focus on individual needs,
            interests and abilities with a view to implement student centric
            approach. At our center, all children are treated equally and with
            respect, regardless of race, religion, language, ability or gender.
          </p>
          <p className="mt-5 text-justify">
            Children are our future and also caretaker of our environment. Early
            Learning education is the fundamental for future learning. We are
            following Australian Standard Curriculum. Our Montessori approach
            prepares our children to become confident, independent and active
            members of our society. We believe that Smart Children can give us a
            Smart Society in the future.
          </p>
          <h1 className="mt-9 text-xl font-semibold">Philosophies:</h1>
          <ServicePoint
            title={
              "Safe, secure and supervised environment for children to play,learn and grow."
            }
          />

          <ServicePoint
            title={
              "Pre-schooling and creativity programs are designed to address socio-emotional skill, problem solving skills, compromising and sharing within themselves, respecting others and also grow their self-confidence."
            }
          />

          <ServicePoint
            title={
              " A learning environment with a view to provide children a sense of green and sustainable world."
            }
          />

          <ServicePoint
            title={
              " Children should be free to observe, question, experiment and explore their learning environment."
            }
          />
          <ServicePoint
            title={
              " Transparent and honest communication with our families, respecting their rights and opinions and encouraging family involvement and feedback into the development and delivery of our educational program."
            }
          />
        </div>
        <div className="">
          <img
            className="rounded-md"
            src={image}
            alt="service-images"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
