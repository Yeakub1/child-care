import React from "react";
import image from "../../../../assets/images/services-2.jpg";
import ServicePoint from "../../../utility/ServicePoint";

const Innovative = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-24">
      <div className="grid md:grid-cols-2 gap-5 items-center">
        <div className="">
          <img
            className="rounded-md"
            src={image}
            alt="service-images"
            draggable="false"
          />
        </div>
        <div className="order-first md:order-last">
          <h1 className="text-4xl font-semibold">
            Innovative Ideas, Stylish Designs
          </h1>
          <p className="mt-5 text-justify">
            We support and respect every child’s individuality. We set
            individual aged appropriate developmental goals (physical,
            cognitive, social, emotional, language developmental milestone) and
            try to achieve them through different types of play and activities.
            Keeping record of their developmental milestone through a book is
            called a Portfolio Book. Portfolio book is updated and maintained as
            per Australian Standard EYLF (Early Year Learning Framework)
            curriculum. Every child has got a learning outcome through his/her
            daily activities and play with us. Here is a short list of our
            uniqueness below:
          </p>
          <h1 className="mt-9 text-xl font-semibold">Philosophies:</h1>
          <ServicePoint title={"Australian Standard Curriculum "} />
          <ServicePoint
            title={
              "Student Centric approach (every child is treated as an individual)"
            }
          />
          <ServicePoint title={"Early Childhood Development program"} />
          <ServicePoint title={"Portfolio book"} />
          <ServicePoint
            title={
              "Montessori style play to develop and practice skill of independence and self-care"
            }
          />
          <ServicePoint
            title={
              "Recycle and crafts (origami) work with green environment concept "
            }
          />
          <ServicePoint
            title={"Educators are first aid trained and experienced "}
          />
          <ServicePoint
            title={
              "24 hours CCTV surveillance for safety and nurturing environments. "
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Innovative;
