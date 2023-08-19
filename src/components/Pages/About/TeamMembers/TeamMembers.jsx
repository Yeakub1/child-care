import React from "react";
import foundr from "../../../../assets/images/founder.jpg";
import Coordinator from "../../../../assets/images/Coordinator.jpg";
import Supervisor1 from "../../../../assets/images/Supervisor-1.jpg";
import Supervisor2 from "../../../../assets/images/Supervisor2.jpg";
import { BsPatchCheckFill } from "react-icons/bs";

const TeamMembers = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-20">
      <h1 className="text-center text-5xl font-semibold">
        Our Team of Professionals
      </h1>
      <div className="mt-12 shadow-xl p-3 ">
        <p className="text-justify ">
          Sonia Akram is Founder and Director of ABC Early Learning Daycare
          Center (since 2017) and also a Founder Member of Shonar Tori (Child
          and Adolescent club). She is successfully running ABC Elementary
          School since 2020 (online platform). She did certificate III and
          Diploma in Early Childhood Development while staying in Australia. She
          completed her graduation in International Relations (IR) from Dhaka
          University. She is an Early Childhood Development and Education
          Specialist and has been working in this specific sector since 2008
          while her stay in Australia. She has also been involved with ‘We
          Foundation’ in Dhaka, Bangladesh and serving the slum area
          (underprivileged children) since 2009 to support their ongoing primary
          education from Australia. While working in Australia she continued
          doing courses, training and workshops on Children Behaviour
          Management, Asthma and Anaphylaxis Management and Early Year Learning
          Framework (EYLF). She has also received ‘Certified Centre Supervisor/
          Acting Director’ certificate in Australia for early childhood and
          childcare centres. She has been awarded for the best early childhood
          educator from renowned Early Learning Childcare Centre in 2010. In
          Bangladesh she completed “Advance certificate course for supervisors
          and managers for child care centre” from Brac IED. She also achieved
          Certificate on ‘Early Intervention on Applied Behavioural Analysis’
          from Dhaka University. She is experienced on handling ADHD and Special
          Need Children (Special Workshop from INDR and BSMMU, Bangladesh) in
          both Bangladesh and Australia. Sonia Akram has been developing her own
          training modules for last couple of years and also started providing
          training to other centers in the community for a significant impact in
          the daycare industry in Bangladesh. Sonia Akram has been selected from
          her venture, ABC Early Learning Daycare Centrer for the best 18
          Entrepreneurs in Bangladesh by Ygap Australia (INGO) for their
          acceleration program in 2019. After a great success at Niketon,
          Gulshan 1 with ABC Early Learning Daycare Center, she has opened her
          second branch in ‘Dhanmondi 6’ in March, 2021 and also opened a third
          branch at Niketon, Gulshan 1 in November, 2021 to meet the ongoing
          growing demand. She has been also working with multinational companies
          and corporates to support their in-house childcare centers in Dhaka.
          In five year time, she has successfully partnered with American
          Standard International School (ASIS) to run her fifth center located
          at Gulshan 2, Dhaka. She has been chosen by Brac IED to participate as
          a regular guest speaker at their childcare courses. She has been also
          invited at different TV channels for her expert opinion on early
          childhood development and education. She believes that smart children
          can make a smart society. She has been working closely with children
          and families in the community to create a foundation or platform for
          the children to enter the primary or higher education as a lifelong
          learner and critical thinking citizen.
        </p>

        <div className="flex items-center gap-5 mt-5">
          <img
            className="h-40 rounded-full"
            src={foundr}
            draggable="false"
            alt="foundr"
          />
          <div className="">
            <h1 className="text-xl font-bold">Sonia Akram</h1>
            <h1 className="text-lg">Founder & Director</h1>
          </div>
        </div>
      </div>

      <div className="md:flex items-center shadow-xl p-3 rounded-lg">
        <div className="w-4/12">
          <img
            src={Coordinator}
            alt="Coordinator"
            draggable="false"
            className="rounded-full md:h-36 h-40 w-full"
          />
          <div className="text-center mt-2">
            <h2 className="text-xl font-semibold">Zakia Yesmin </h2>
            <p className="text-lg">Coordinator</p>
          </div>
        </div>
        <div className="card-body items-center text-center">
          <p className="text-justify">
            Mrs. Zakia Yesmin Leena is our Coordinator. She has been in the
            industry for 8 years. She loves to involve herself in the Early
            Childhood Development Education process where children learn through
            playing. She has completed her Masters Degree from Home Economics.
            She has spent most of her career with ABC and she is proud of it.
            Mrs. Leena is trained on –
            <h1 className="flex items-center gap-3 mt-4">
              <BsPatchCheckFill className="text-[#0788FF]" />
              ADHD Children Management
            </h1>
            <h1 className="flex items-center gap-3 mt-2">
              <BsPatchCheckFill className="text-[#0788FF]" />
              Special Child Speech & Language Therapy
            </h1>
            <h1 className="flex items-center gap-3 mt-2">
              <BsPatchCheckFill className="text-[#0788FF]" />
              Childhood Development Education & Care
            </h1>
            <h1 className="flex items-center gap-3 mt-2">
              <BsPatchCheckFill className="text-[#0788FF]" />
              First Aid
            </h1>
          </p>
        </div>
      </div>
      <div className="mt-20">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src={Supervisor1}
                alt="Supervisor"
                draggable="false"
                className="rounded-full h-40"
              />
            </figure>
            <div className="card-body">
              <div className="text-center mb-3">
                <h2 className="text-xl font-semibold">Afnan Sultana Prache </h2>
                <p className="text-lg">Supervisor</p>
              </div>
              <p className="text-justify">
                Afnan Sultana Prache is our Pre-school teacher & Supervisor of
                Niketon 2 centre. She is a new member in ABC but has already
                shown her passion to develop a relationship with each of the
                children and their parents . She has completed her B.Sc degree
                in Child development and Social Relationship from Govt. College
                of Applied Human Science and now her Master’s is ongoing in the
                aforementioned subject. Apart from this, she has accomplished
                internship at SWID Bangladesh(Society for the Welfare of the
                Intellectually Disabled, Bangladesh) and workshop on autism from
                National Autism Foundation. She was also with different NGO’s as
                a volunteer. She is at present working with ABC as she loves
                working with children and watching them grow and thrive.
              </p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src={Supervisor2}
                              alt="Supervisor"
                              draggable='false'
                className="rounded-full h-40"
              />
            </figure>
            <div className="card-body">
              <div className="text-center mb-3">
                <h2 className="text-xl font-semibold">Naz E Zabin</h2>
                <p className="text-lg">Supervisor</p>
              </div>
              <p className="text-justify">
                Miss Naz is one of our lead teachers and Supervisor of Niketon
                center 1. Alongside, she is coordinating the preschool sector of
                ABC. She has been with ABC for more than 3 years. She has been
                currently doing her Bachelors of Arts in English from BRAC
                University. Miss Naz is trained on ELT from BRAC Currently. She
                is working on Language skill development and ESL development of
                the students at their early years by using thematic activities.
                She designs and coordinates preschool lesson plans. She also
                handles the Graphic Resources and module/content writing part of
                the center. Miss Naz has chosen to work here part time beside
                her study for she is very passionate about working with children
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
